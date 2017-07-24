import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from 'styles/market-list'
import {
  
  initMarketList,
  toggleSearchView,
  cancelSearch,
  clearSearch,
  searchInMarketList,

} from 'thunks/market-list'

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
    this.props.initMarketList ()
  }

  get listViewProps () {
    return {

      isRefreshing        : false,
      searchEnabled       : this.props.marketListSearchEnabled,
      searchedText        : this.props.marketListSearchedText,
      data                : this.props.filteredMarketList,
      onRefresh           : () => console.log ('Refreshing market list'),
      renderItem          : props => ( <MarketListItemView { ...props }/> ),
      onScroll            : e => (e.nativeEvent.contentOffset.y < -8) ? this.props.toggleSearchView (true) : null,
      clearSearch         : e => this.props.clearSearch (),
      onSearchCancell     : e => this.props.cancelSearch (null),
      onSearchTextChange  : e => this.props.searchInMarketList (e.nativeEvent.text),
    
    }
  }

  get errorViewProps () {
    return {
      
      error: this.props.marketListError,
      retry: this.props.initMarketList,

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

  filteredMarketList: state.marketList.filteredMarketList,
  marketListFetching: state.marketList.marketListFetching,
  marketListError: state.marketList.marketListError,
  marketListSearchEnabled: state.marketList.marketListSearchEnabled,
  marketListSearchedText: state.marketList.marketListSearchedText,

})


const mapDispatchToProps = dispatch => ({

  initMarketList: () => dispatch (initMarketList ()),
  cancelSearch: () => dispatch (cancelSearch ()),
  clearSearch: () => dispatch (clearSearch ()),
  toggleSearchView: (enabled) => dispatch (toggleSearchView (enabled)),
  searchInMarketList: (text) => dispatch (searchInMarketList (text)),

})


export default connect (mapStateToProps, mapDispatchToProps) (MarketListController)