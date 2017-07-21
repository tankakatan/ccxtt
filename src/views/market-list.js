import React, { Component } from 'react'
import {
  
  View,
  Text,
  Button,
  ActivityIndicator

} from 'react-native'

import styles from 'styles/market-list'

export const MarketListView = props => (

	console.log ('MarketList props', props),

	<View style={ styles.container }>
		<Text style={ styles.welcome }>
			Market List
		</Text>
	</View>
    
)

export const MarketListFetchingView = (props) => (

	<View style={ styles.container }>
		<ActivityIndicator />
	</View>

)


export const MarketListErrorView = (props) => (

	console.log ('Error @ MarketListErrorView', props),

	<View style={ styles.container }>
		<Text style={ styles.welcome }>Error!</Text>
		<Button onPress={ props.retry }>
			<Text style={ style.instructions }>Retry</Text>
		</Button>
	</View>
)