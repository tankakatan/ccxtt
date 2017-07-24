import {

} from 'actions/app'

const DEFAULT_STATE = { }

export const app = (state = DEFAULT_STATE, action) => {
	switch (action.type) {		
		default: {
			return {
				...state
			}
		}
	}
}