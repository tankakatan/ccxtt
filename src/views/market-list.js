import React, { Component } from 'react'
import {
  
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator

} from 'react-native'

import styles from 'styles/market-list'
// import * as utils from 'utils/market-list'

export const MarketListItemView = ({ index, item, separators }) => (

	<View style={ styles.marketListRow }>
		<Text styel={ styles.marketListRowTitle }>{ item }</Text>
	</View>

)


export const MarketListView = props => (

	<FlatList data={ props.data }
		keyExtractor={ (item, index) => index }
		renderItem={ props => ( <MarketListItemView { ...props }/> ) }
		refreshing={ props.refreshing || false }
		onRefresh={ () => console.log ('Refreshing market list') }
	/>    

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