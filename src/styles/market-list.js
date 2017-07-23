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
  }
})

export default styles