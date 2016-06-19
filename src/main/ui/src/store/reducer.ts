import { Action, ActionReducer } from '@ngrx/store';
import { GardenState } from './model';

export const GET_MOISTURE_DATA = 'GET_MOISTURE_DATA';
export const GET_MOISTURE_DATA_SUCCESS = 'GET_MOISTURE_DATA_SUCCESS';
export const GET_MOISTURE_DATA_FAILED = 'GET_MOISTURE_DATA_FAILED';

export const INITIAL_STATE: GardenState = {
	moisture: {}
}

export const moistureDataReducer: ActionReducer<GardenState> = (state: GardenState = INITIAL_STATE, action: Action) => {
	console.log('ACTION:', action);
	switch(action.type) {
		case GET_MOISTURE_DATA_SUCCESS:
			return state;

		case GET_MOISTURE_DATA_FAILED:
			return state;

		default:
			return state;
	}
};
