export interface MoistureReading {
	value: number;
	time: Date;
}

export type MoistureData = MoistureReading[];

export type MoistureState = {
	[feedId: string]: MoistureData
};

export interface GardenState {
	moisture: MoistureState;
}
