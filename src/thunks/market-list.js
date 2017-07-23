import {

	setMarketList,
	setMarketListFetching,
	setMarketListError,

} from 'actions/market-list'

import ccxt from '../ccxt/ccxt'

export const getMarketList = () => (dispatch, getState) => {
	
	dispatch (setMarketListFetching (true))
	dispatch (setMarketList (ccxt.markets.map (market => new ccxt[market] ())))
	dispatch (setMarketListFetching (false))
}