import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import { StackNavigator } from 'react-navigation'

import { connect } from 'react-redux'
import { startApp } from 'actions/app'
import styles from 'styles/app'

import MarketListController from 'controllers/market-list'

const Navigator = StackNavigator ({
	MarketList: { screen: MarketListController },
})

class AppController extends Component {
	
	render () {
		return (
			<Navigator />
		)
	}
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
	
})

export default connect (mapStateToProps, mapDispatchToProps) (AppController)