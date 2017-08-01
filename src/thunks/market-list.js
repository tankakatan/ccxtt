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

	Promise.all (marketList.map ((market, index) => {
		return market.api && market.api.public && market.loadProducts ().then (productList => {
			const { marketList: { productListByMarket, marketByProduct }} = getState ()
			
			dispatch (setProductListByMarket ({ ...productListByMarket, [market.name]: productList, }))
		}).catch (error => {
			const { marketList: { productListByMarket }} = getState ()
			
			dispatch (setProductListByMarket ({ ...productListByMarket,
				[market.name]: { error },
			}))
		})
	})).then (() => {
		const { marketList: { productListByMarket, marketByProduct }} = getState ()
		
		dispatch (setMarketByProduct (
			productListByMarket.keysOf ().map ((name) => ({ name,
				productList: productListByMarket[name].keysOf (),

			})).reduce ((marketListByProduct, market) => (
				market.productList.reduce ((marketByProduct, product) => ({ ...marketByProduct,	
					[product]: (marketByProduct[product] || []).concat ([market.name]),

				}), marketListByProduct)
			), marketByProduct).pickBy ((marketList) => (marketList.length > 1))
		))
	}).then (() => {
		const { marketList: { marketByProduct }} = getState ()

		dispatch (setCurrentProduct (marketByProduct.keysOf ().sort (($1, $2) => (
			marketByProduct[$1].length - marketByProduct[$2].length)
		).pop ()))
	})
}