import React from 'react'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import TabsView from './TabsView'
import DeckView from './DeckView'
import NewCardView from './NewCardView'
import QuizView from './QuizView'
import { AppLoading } from 'expo'
import { fetchDecks } from '../utils/storage'
import { receiveDecks } from '../actions'
import { Platform, StatusBar } from 'react-native'

const Stack = StackNavigator({
  TabsView: {
    screen: TabsView
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
  initialRouteName: 'TabsView',
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  headerMode: 'screen'
})


class StackView extends React.Component {

  state = {
    ready: false
  }

  componentDidMount() {
    const { dispatch } = this.props
    fetchDecks()
    .then((decks) => {
      dispatch(receiveDecks(decks))
    })
    .then(() => this.setState({
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

export default connect()(StackView)
