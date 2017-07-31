import {

	SET_MARKET_LIST,
	SET_MARKET_LIST_FETCHING,
	SET_MARKET_LIST_ERROR,
	
	SET_SEARCH_VIEW_ENABLED,
	SET_SEARCH_TEXT,
	SET_FILTERED_MARKET_LIST,

	SET_PRODUCT_LIST_BY_MARKET,
	SET_MARKET_BY_PRODUCT,

	SET_CURRENT_PRODUCT,

} from 'actions/market-list'


const DEFAULT_STATE = {
  
  marketList: [],
  marketListFetching: false,
  marketListError: null,
  
  marketListSearchEnabled: false,
  marketListSearchedText: null,
  filteredMarketList: [],
  
  productListByMarket: {},
  marketByProduct: {},
  
  currentProduct: null,

}


export const marketList = (state = DEFAULT_STATE, action) => {
	switch (action.type) {

		case SET_MARKET_LIST: {
			return { ...state,
				marketList: action.list,
			}
		}

		case SET_FILTERED_MARKET_LIST: {
			return { ...state,
				filteredMarketList: action.list
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

		case SET_SEARCH_VIEW_ENABLED: {
			return { ...state,
				marketListSearchEnabled: action.enabled,
			}
		}

		case SET_SEARCH_TEXT: {
			return { ...state,
				marketListSearchedText: action.text,
			}
		}

		case SET_PRODUCT_LIST_BY_MARKET: {
			return { ...state,
				productListByMarket: action.dictionary,
			}
		}

		case SET_MARKET_BY_PRODUCT: {
			return { ...state,
				marketByProduct: action.dictionary,
			}
		}

		case SET_CURRENT_PRODUCT: {
			return { ...state,
				currentProduct: action.product,
			}
		}

		default: {
			return {
				...state
			}
		}
	}
}