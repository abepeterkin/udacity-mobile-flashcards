import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import NavContainer from './src/components/NavContainer'
import reducer from './src/reducers'

const store = createStore(reducer)

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <NavContainer />
      </Provider>
    )
  }
}

