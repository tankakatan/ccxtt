import {

	setMarketList,
	setMarketListFetching,
	setMarketListError,
	setSearchViewEnabled,
	setSearchedText,
	setFilteredMarketList,
	setProductList,

} from 'actions/market-list'

import ccxt from 'ccxt'

export const initMarketList = () => (dispatch, getState) => {
	
	dispatch (setMarketListFetching (true))

	const marketList = ccxt.markets.map (market => new ccxt[market] ())
	
	dispatch (setMarketList (marketList))
	dispatch (setFilteredMarketList (marketList))
	dispatch (setMarketListFetching (false))
	dispatch (getMarketListProducts ())
}

export const toggleSearchView = enabled => (dispatch, getState) => {

	dispatch (setSearchViewEnabled (enabled))
}


export const searchInMarketList = text => (dispatch, getState) => {

	dispatch (setSearchedText (text))
	dispatch (filterSearchList ())
}


export const cancelSearch = () => (dispatch, getState) => {

	dispatch (searchInMarketList (null))
	dispatch (toggleSearchView (false))
}


export const clearSearch = () => (dispatch, getState) => {

	dispatch (searchInMarketList (null))
}


export const filterSearchList = () => (dispatch, getState) => {

	const { marketList: { marketList, marketListSearchedText }} = getState ()

	dispatch (setFilteredMarketList (marketListSearchedText ? (
		marketList.filter (market => (
			market.name.toLowerCase ().indexOf (marketListSearchedText.toLowerCase ()) == 0
		)
	)) : marketList))
}


export const getMarketListProducts = () => (dispatch, getState) => {
	const { marketList: { marketList }} = getState ()
	marketList.forEach (market => market.api && market.api.public && market.fetchProducts ()
		.then (productList => dispatch (setProductList (productList)))
		.catch (error => console.log ('Product fetch error', market.name, error, market))
	)
}