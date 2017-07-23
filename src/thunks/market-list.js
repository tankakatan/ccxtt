import {

	setMarketList,
	setMarketListFetching,
	setMarketListError,

} from 'actions/market-list'

import ccxt from '../../node_modules/ccxt/ccxt'

export const getMarketList = () => (dispatch, getState) => {
	
	dispatch (setMarketListFetching (true))
	dispatch (setMarketList (ccxt.markets))
	dispatch (setMarketListFetching (false))
}