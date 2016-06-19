package com.pleimann.garden.service;

import com.pleimann.garden.model.MoistureFeed;
import com.pleimann.garden.model.MoistureReading;
import org.apache.commons.lang.math.RandomUtils;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ErrorCollector;
import org.junit.runner.RunWith;
import org.mockito.Matchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;

import javax.inject.Inject;
import java.time.Instant;

import static org.hamcrest.Matchers.*;
import static org.mockito.BDDMockito.eq;
import static org.mockito.BDDMockito.given;
import static org.mockito.Matchers.argThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(MoistureService.class)
public class MoistureServiceTest {
	private static final Integer FEED_ID_BED1 = 01234;
	private static final String FEED_NAME_BED1 = "garden-moisture-bed1";
	private static final Integer FEED_ID_BED2 = 56789;
	private static final String FEED_NAME_BED2 = "garden-moisture-bed2";

	@Rule
	public ErrorCollector errors;

	@Autowired
	private MockMvc mvc;

	@Value("${aio.key}")
	private String aioKey;

	@MockBean
	private RestTemplate template;

	@Inject
	private MoistureService fixture;

	@Before
	public void beforeEach(){
		this.fixture.setAdafruitServiceTemplate(this.template);
	}

 	@Test
	public void testMoistureFeedBed2() throws Exception {
		given(this.template.exchange(eq(MoistureService.FEED_DATA_URI), eq(HttpMethod.GET), argThat(hasProperty("headers",
			hasKey(MoistureService.AIO_KEY_HEADER))), eq(MoistureFeed.class), Matchers.<Object[]>any()))
			.willReturn(ResponseEntity.ok(
				MoistureFeed.builder()
					.id(FEED_ID_BED2.longValue())
					.name(FEED_NAME_BED2)
					.readings(new MoistureReading[]{
						MoistureReading.builder()
							.value(100.0 * RandomUtils.nextDouble())
							.timestamp(Instant.now())
							.build(),
						MoistureReading.builder()
							.value(100.0 * RandomUtils.nextDouble())
							.timestamp(Instant.now())
							.build()
					})
						.build()
			));

		this.mvc.perform(get("/api/feed/{feedId}", FEED_NAME_BED2).accept(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk())
			.andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(jsonPath("id").value(FEED_ID_BED2))
			.andExpect(jsonPath("name").value(FEED_NAME_BED2))
			.andExpect(jsonPath("readings").isArray())
			.andExpect(jsonPath("readings").value(hasSize(2)))
		;
	}

	@Test
	public void testMoistureFeedDefault(){

	}

	@Test
	public void testMoistureFeedDNE(){

	}

	@Test
	public void testMoistureFeedEmpty(){

	}
}
