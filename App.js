import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import StackView from './src/components/StackView'
import reducer from './src/reducers'
import { setLocalNotification } from './src/utils/notifications'
import { StatusBar } from 'react-native'

const store = createStore(reducer)

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <StackView />
      </Provider>
    )
  }
}

