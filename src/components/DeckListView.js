import React from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import styles from '../styles'

class DeckListView extends React.Component {

  render() {
    const { decks, screenProps } = this.props
    return (
      <View style={styles.container}>
        <Text>Deck List View</Text>
        {Object.keys(decks).map((key) => {
          const deck = decks[key]
          const numCards = deck.cards.length
          return (
            <Deck key={key} numCards={numCards} title={deck.title} navigation={screenProps.stackNavigation}/>
          )
        })}
      </View>
    )
  }
}

class Deck extends React.Component {
  navigateToDeckView () {
    this.props.navigation.navigate('DeckView', { title: this.props.title })
  }
  
  render () {
    const { title, numCards } = this.props
    return (
      <TouchableHighlight style={styles.button} onPress={this.navigateToDeckView.bind(this)}>
        <Text> {title} </Text>
      </TouchableHighlight>
      )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
)(DeckListView)