import React from 'react'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import DeckListView from './DeckListView'
import NewDeckView from './NewDeckView'

const Tabs = TabNavigator({
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Deck List'
    }
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  },
}, {
  initialRouteName: 'DeckListView',
})

class HomeView extends React.Component {
  render () {
    return (
      <Tabs screenProps={{stackNavigation: this.props.navigation}}/>
    )
  }
}

export default connect()(HomeView)
