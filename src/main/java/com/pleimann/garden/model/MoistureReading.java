package com.pleimann.garden.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.time.Instant;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class MoistureReading {
	private float value;
	private Instant timestamp;
}
