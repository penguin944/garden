package com.pleimann.garden.service;

import com.pleimann.garden.model.MoistureFeed;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import javax.inject.Inject;

@RestController()
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class MoistureService {
	public static final String FEED_DATA_URI = "https://io.adafruit.com/api/feeds/{feed}/data";
	public static final String AIO_KEY_HEADER = "X-AIO-Key";

	@Value("${aio.key}")
	private String aioKey;

	@Inject
	@Getter
	@Setter
	private RestTemplate adafruitServiceTemplate;

	@RequestMapping(value = "/feed/{feedName}", method = RequestMethod.GET)
	public HttpEntity<MoistureFeed> moistureFeed(@PathVariable(value = "feedName") String feedName) {
		HttpHeaders requestHeaders = new HttpHeaders();
		requestHeaders.add(AIO_KEY_HEADER, this.aioKey);
//		requstHeaders.add();

		HttpEntity<?> requestEntity = new HttpEntity(requestHeaders);

		HttpEntity<MoistureFeed> response =
			this.adafruitServiceTemplate.exchange(FEED_DATA_URI, HttpMethod.GET, requestEntity, MoistureFeed.class, feedName);

		return response;
	}

	// Convert a predefined exception to an HTTP Status code
	@ResponseStatus(value= HttpStatus.FORBIDDEN, reason="Adafruit.IO forbid the request")  // 403
	@ExceptionHandler(HttpClientErrorException.class)
	public void forbidden() { }
}
