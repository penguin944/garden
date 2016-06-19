package com.pleimann.garden.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MoistureFeed {
	public Long id;
	public String name;
	public MoistureReading[] readings;
}
