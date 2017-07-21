import {

	setMarketList,
	setMarketListFetching,
	setMarketListError,

} from 'actions/market-list'

// import ccxt from 'ccxt'

export const getMarketList = () => (dispatch, getState) => {
	
	dispatch (setMarketListFetching (true))

	// console.log ('Loading data:', ccxt)
	setTimeout (() => dispatch (setMarketListFetching (false)), 5000)

}