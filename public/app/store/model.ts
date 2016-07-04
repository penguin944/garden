export interface MoistureReading {
	value: number;
	timestamp: Date;
}

export interface MoistureFeed {
	id: number;
	name: string;
	readings: MoistureReading[];
}

export type MoistureState = {
	[feedId: string]: MoistureFeed
};

export interface GardenState {
	moisture: MoistureState;
}
