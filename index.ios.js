/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import AppController from 'controllers/app'
import configureStore from './src/store'

const store = configureStore ()

export default class CCXTT extends Component {

  render () {
    return (
      <Provider store={ store }>
        <AppController />
      </Provider>
    )
  }
}

AppRegistry.registerComponent ('CCXTT', () => CCXTT)
