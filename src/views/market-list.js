import React, { Component } from 'react'
import {
  
  View,
  Text,
  Image,
  Button,
  FlatList,
  TextInput,
  ActivityIndicator,
  TouchableHighlight,

} from 'react-native'

import styles from 'styles/market-list'


export const MarketListItemView = ({ index, item, separators }) => (
	<View style={ styles.marketListRow }>
		<View style={ styles.marketLogo }>
			<Image
				style={ styles.marketLogoImage }
				source={{ uri: item.urls.logo }}
				resizeMode={ 'contain' }
			/>
		</View>
		<Text styel={ styles.marketListRowTitle }>{ item.name }</Text>
	</View>

)

export const ListSearchView = props => (
	
	<View style={ styles.listSearchView }>
		<TextInput
			style={ styles.listSearchInput }
			placeholder={ 'Enter a market name' }
			onChange={ props.onSearchTextChange }
		/>
		<TouchableHighlight onPress={ props.onSearchCancell }>
			<Text style={ styles.listSearchCancell }>Cancel</Text>
		</TouchableHighlight>
	</View>

)

export const MarketListView = props => (

	<View style={ styles.marketListViewContainer }>
		{ props.searchEnabled ? <ListSearchView { ...props }/> : null }
		<FlatList data={ props.data }
			keyExtractor={ (item, index) => index }
			renderItem={ props.renderItem }
			refreshing={ props.isRefreshing }
			onRefresh={ props.onRefresh }
			onScroll={ props.onScroll }
			scrollEventThrottle={ 512 }
		/>
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