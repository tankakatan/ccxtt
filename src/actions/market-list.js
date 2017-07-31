export const SET_MARKET_LIST = 'SET_MARKET_LIST'
export const SET_MARKET_LIST_FETCHING = 'SET_MARKET_LIST_FETCHING'
export const SET_MARKET_LIST_ERROR = 'SET_MARKET_LIST_ERROR'

export const SET_SEARCH_VIEW_ENABLED = 'SET_SEARCH_VIEW_ENABLED'
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
export const SET_FILTERED_MARKET_LIST = 'SET_FILTERED_MARKET_LIST'

export const SET_PRODUCT_LIST_BY_MARKET = 'SET_PRODUCT_LIST_BY_MARKET'
export const SET_MARKET_BY_PRODUCT = 'SET_MARKET_BY_PRODUCT'
export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT'


/*	Action constructor	*/

export const setMarketList = list => ({ type: SET_MARKET_LIST, list })
export const setMarketListFetching = isFetching => ({ type: SET_MARKET_LIST_FETCHING, isFetching })
export const setMarketListError = error => ({ type: SET_MARKET_LIST_ERROR, error })

export const setSearchViewEnabled = enabled => ({ type: SET_SEARCH_VIEW_ENABLED, enabled })
export const setSearchedText = text => ({ type: SET_SEARCH_TEXT, text })
export const setFilteredMarketList = list => ({ type: SET_FILTERED_MARKET_LIST, list })

export const setProductListByMarket = dictionary => ({ type: SET_PRODUCT_LIST_BY_MARKET, dictionary })
export const setMarketByProduct = dictionary => ({ type: SET_MARKET_BY_PRODUCT, dictionary })

export const setCurrentProduct = product => ({ type: SET_CURRENT_PRODUCT, product })