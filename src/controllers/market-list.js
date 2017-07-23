import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from 'styles/market-list'
import { getMarketList } from 'thunks/market-list'
import {
	
	MarketListView,
  MarketListItemView,
	MarketListFetchingView,
	MarketListErrorView,

} from 'views/market-list'


class MarketListController extends Component {

	static navigationOptions = {
    title: 'Market List'
  }

  componentDidMount () {
  	this.props.getMarketList ()
  }

  get listViewProps () {
  	return {
  		data: this.props.marketList,
      isRefreshing: false,
      onRefresh: () => console.log ('Refreshing market list'),
      renderItem: props => ( <MarketListItemView { ...props }/> ),
  	}
  }

  get errorViewProps () {
  	return {
  		error: this.props.marketListErro,
  		retry: this.props.getMarketList,

  	}
  }

	render () {
		return (
			this.props.marketListFetching ? ( <MarketListFetchingView /> ) : (
				this.props.marketListError ? ( <MarketListErrorView { ...this.errorViewProps }/> ) : (
					
					<MarketListView { ...this.listViewProps }/>
				
				)
			)
		)
	}
}


const mapStateToProps = state => ({

  marketList: state.marketList.marketList,
  marketListFetching: state.marketList.marketListFetching,
  marketListError: state.marketList.marketListError,

})


const mapDispatchToProps = dispatch => ({

  getMarketList: () => dispatch (getMarketList ())

})


export default connect (mapStateToProps, mapDispatchToProps) (MarketListController)