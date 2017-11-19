import React from 'react'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import DeckListView from './DeckListView'
import NewDeckView from './NewDeckView'
import { blue } from '../styles/colors'

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
  }
}, {
    tabBarOptions: {
      style: {
        backgroundColor: blue
      }
    }
  }
)

class HomeView extends React.Component {
  render () {
    return (
      <Tabs screenProps={{stackNavigation: this.props.navigation}}/>
    )
  }
}

export default connect()(HomeView)
