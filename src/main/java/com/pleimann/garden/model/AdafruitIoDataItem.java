package com.pleimann.garden.model;

import lombok.Data;

import java.time.Instant;

@Data
public class AdafruitIoDataItem {
	private Long feedId;
	private Long id;
	private Double value;
	private Instant createdAt;
}
