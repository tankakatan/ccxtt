import {

	setMarketList,
	setMarketListFetching,
	setMarketListError,
	
	setSearchViewEnabled,
	setSearchedText,
	setFilteredMarketList,
	
	setProductListByMarket,
	setMarketByProduct,

	setCurrentProduct,

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
	
	Promise.all (marketList.map (market => {
		const { marketList: { productListByMarket, marketByProduct }} = getState ()

		return market.api && market.api.public && market.fetchProducts ().then (productList => {			
			dispatch (setProductListByMarket ({ ...productListByMarket, [market.name]: productList, }))
			dispatch (setMarketByProduct (
				productList.map (({ symbol }) => symbol).reduce ((marketByProduct, symbol) => ({ ...marketByProduct,
					[symbol]: (marketByProduct[symbol] || []).concat ([market]),
				}), marketByProduct)
			))
		}).catch (error => dispatch (setProductListByMarket ({ ...productListByMarket,
			[market.name]: { error },
		})))

	})).then (() => {

		const { marketList: { marketByProduct }} = getState ()	
		dispatch (setCurrentProduct (marketByProduct.keysOf ().sort (($1, $2) => (marketByProduct[$1].length - marketByProduct[$2].length)).pop ()))
	
	})
}