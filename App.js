import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import NavContainer from './src/components/NavContainer'
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
        <NavContainer />
      </Provider>
    )
  }
}

