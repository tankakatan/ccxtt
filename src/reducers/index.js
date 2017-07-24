import { combineReducers } from 'redux'
import { app } from './app'
import { marketList } from './market-list'

export default combineReducers ({
	app,
	marketList,
})