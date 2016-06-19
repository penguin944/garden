package com.pleimann.garden.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;

@Data
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class MoistureReading {
	private Double value;

	@JsonFormat(shape = JsonFormat.Shape.STRING)
	private Instant timestamp;
}
