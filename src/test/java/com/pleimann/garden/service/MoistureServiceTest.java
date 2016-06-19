package com.pleimann.garden.service;

import static org.mockito.BDDMockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.pleimann.garden.model.MoistureFeed;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ErrorCollector;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.util.EnvironmentTestUtils;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.http.*;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(MoistureService.class)
public class MoistureServiceTest {
	private static final String FEED_ID_BED1 = "garden-moisture-bed1";
	private static final String FEED_ID_BED2 = "garden-moisture-bed2";

	@Rule
	public ErrorCollector errors;

	@Autowired
	private ConfigurableEnvironment environment;

	@Autowired
	private MockMvc mvc;

	@MockBean
	private TestRestTemplate template;

	@Before
	public void beforeEach(){
		EnvironmentTestUtils.addEnvironment(this.environment, "aio-key=abcdefg");
	}

 	@Test
	public void testMoistureFeedBed2() throws Exception {
		given(this.template.exchange(eq(MoistureService.FEED_DATA_URI), eq(HttpMethod.GET), Mockito.any(), eq(MoistureFeed.class), eq(FEED_ID_BED2)))
			.willReturn(ResponseEntity.ok(
				MoistureFeed.builder()
					.id(12345L)
					.name(FEED_ID_BED2)
						.build()
			));

		this.mvc.perform(get("/feed/{feedId}", FEED_ID_BED2).accept(MediaType.APPLICATION_JSON_UTF8))
			.andExpect(status().isOk())
			.andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON_UTF8));
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
