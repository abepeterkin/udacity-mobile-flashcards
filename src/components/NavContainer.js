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
import { Platform, StatusBar } from 'react-native'

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
  initialRouteName: 'HomeView',
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})


class NavContainer extends React.Component {

  state = {
    ready: false
  }

  componentDidMount() {
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
      return (
        <Stack />
      )
    } else {
      return <AppLoading />
    }
  }
}

export default connect()(NavContainer)
