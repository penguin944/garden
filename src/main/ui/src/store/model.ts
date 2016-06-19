export interface MoistureReading {
	value: number;
	time: Date;
}

export interface MoistureState {
	feeds: {
		[feedId: string]: MoistureReading[];
	}
}
