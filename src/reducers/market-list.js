import {

	SET_MARKET_LIST,
	SET_MARKET_LIST_FETCHING,
	SET_MARKET_LIST_ERROR,

} from 'actions/market-list'

const DEFAULT_STATE = {
  marketList: [],
  marketListFetching: false,
  marketListError: null,
}

export const marketList = (state = DEFAULT_STATE, action) => {
	switch (action.type) {

		case SET_MARKET_LIST: {
			return { ...state,
				marketList: action.list,
			}
		}

		case SET_MARKET_LIST_FETCHING: {
			return { ...state,
				marketListFetching: action.isFetching,
			}
		}

		case SET_MARKET_LIST_ERROR: {
			return { ...state,
				marketListError: action.error,
			}
		}

		default: {
			return {
				...state
			}
		}
	}
}