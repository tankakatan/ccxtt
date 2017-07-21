export const SET_MARKET_LIST = 'SET_MARKET_LIST'
export const SET_MARKET_LIST_FETCHING = 'SET_MARKET_LIST_FETCHING'
export const SET_MARKET_LIST_ERROR = 'SET_MARKET_LIST_ERROR'

export const setMarketList = list => ({ type: SET_MARKET_LIST, list })
export const setMarketListFetching = isFetching => ({ type: SET_MARKET_LIST_FETCHING, isFetching })
export const setMarketListError = error => ({ type: SET_MARKET_LIST_ERROR, error })