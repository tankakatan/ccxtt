import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  error: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
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
    marginRight: 10,
    borderRadius: 5,
  },
  listSearchCancell: {
    color: '#69e'
  },
})

export default styles