package com.pleimann.garden.service;

import com.pleimann.garden.model.MoistureFeed;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

@RestController(APPLICATION_JSON_UTF8_VALUE)
public class MoistureService {
	public static final String FEED_DATA_URI = "https://io.adafruit.com/api/feeds/{feed}/data";
	private static final String AIO_KEY_HEADER = "X-AIO-Key";

	@Value("${aioKey:AIO_KEY}")
	private String aioKey;

	private RestTemplate adafruitServiceTemplates;

	public MoistureService(RestTemplate restTemplate){
		this.adafruitServiceTemplates = restTemplate;
	}

	@RequestMapping(value = "/moisture", method = RequestMethod.GET)
	public HttpEntity<MoistureFeed> moistureFeed(@RequestParam(value="feed", defaultValue="garden-moisture-bed1") String feedId) {
		HttpHeaders requestHeaders = new HttpHeaders();
		requestHeaders.add(AIO_KEY_HEADER, this.aioKey);

		HttpEntity<?> requestEntity = new HttpEntity(requestHeaders);

		HttpEntity<MoistureFeed> response =
			this.adafruitServiceTemplates.exchange(FEED_DATA_URI, HttpMethod.GET, requestEntity, MoistureFeed.class, feedId);

		return response;
	}
}
