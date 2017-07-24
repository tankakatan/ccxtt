import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({

  marketListViewContainer: {
    flex: 1,
  },
  
  marketListRow: {
    height: 44,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  marketListRowTitle: {
    flex: 1,
    color: '#333',
    fontSize: 20,
  },
  
  marketLogo: {
    marginRight: 10,
    width: 66,
    height: 44,
  },
  
  marketLogoImage: {
    width: 66,
    height: 44,
  },
  
  listSearchView: {
    height: 44,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  listSearchInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    height: 30,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  
  listSearchCancel: {
    color: '#69e'
  },
  
  clearSearch: {
    backgroundColor: '#fff',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: 25,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  
  clearSearchText: {
    width: 16,
    height: 16,
    textAlign: 'center',
    // borderRadius: 6,
    // backgroundColor: '#999',
    color: '#999',
    fontSize: 16,
    lineHeight: 16,
  },
})

export default styles