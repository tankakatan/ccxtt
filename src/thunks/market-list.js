import {

	setMarketList,
	setMarketListFetching,
	setMarketListError,
	setSearchViewEnabled,
	setSearchedText,
	setFilteredMarketList,

} from 'actions/market-list'

import ccxt from '../ccxt/ccxt'


export const getMarketList = () => (dispatch, getState) => {
	
	dispatch (setMarketListFetching (true))

	const marketList = ccxt.markets.map (market => new ccxt[market] ())
	dispatch (setMarketList (marketList))
	dispatch (setFilteredMarketList (marketList))
	dispatch (setMarketListFetching (false))
}


export const toggleSearchView = enabled => (dispatch, getState) => {

	dispatch (setSearchViewEnabled (enabled))
}


export const searchInMarketList = text => (dispatch, getState) => {

	dispatch (setSearchedText (text))
	dispatch (filterSearchList ())
}


export const cancelSearch = () => (dispatch, getState) => {

	dispatch (setSearchedText (null))
	dispatch (toggleSearchView (false))
}

export const filterSearchList = () => (dispatch, getState) => {

	const { marketList: { marketList, marketListSearchedText }} = getState ()

	dispatch (setFilteredMarketList (marketListSearchedText ? (
		marketList.filter (market => (
			market.name.toLowerCase ().indexOf (marketListSearchedText.toLowerCase ()) == 0
		)
	)) : marketList))
}