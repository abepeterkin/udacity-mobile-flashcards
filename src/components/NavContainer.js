import React from 'react'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import HomeView from './HomeView'
import DeckView from './DeckView'
import NewCardView from './NewCardView'
import QuizView from './QuizView'
import { AppLoading } from 'expo'
import { fetchDecks } from '../utils/storage'
import { receiveDecks } from '../actions'

const Stack = StackNavigator({
  HomeView: {
    screen: HomeView
  },
  DeckView: {
    screen: DeckView
  },
  NewCardView: {
    screen: NewCardView
  },
  QuizView: {
    screen: QuizView
  }
}, {
  initialRouteName: 'HomeView'
})


class NavContainer extends React.Component {

  state = {
    ready: false
  }

  componentWillMount() {
    const { dispatch } = this.props
    fetchDecks().then(decks =>{
      dispatch(receiveDecks(decks))
    }).then(() => this.setState({
      ready: true
    }))
  }

  render () {
    const { ready } = this.state
    if (ready) {
      return <Stack />
    } else {
      return <AppLoading />
    }
  }
}

export default connect()(NavContainer)
