import React from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import styles from '../styles'

class DeckView extends React.Component {

  navigateToNewCardView () {
    this.props.navigation.navigate('NewCardView', { title: this.props.deck.title })
  }

  navigateToQuizView () {
    this.props.navigation.navigate('QuizView', { title: this.props.deck.title })
  }

  render() {
    const { deck } = this.props
    const numCards = deck.cards.length
    return (
      <View style={styles.container}>
        <Text>Deck: {deck.title} ({numCards} cards)</Text>
        <TouchableHighlight style={styles.button} onPress={this.navigateToNewCardView.bind(this)}>
          <Text>Add New Card</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.navigateToQuizView.bind(this)}>
          <Text>Start Quiz</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

function mapStateToProps (decks, ownProps) {
  const { title } = ownProps.navigation.state.params
  return {
    deck: decks[title]
  }
}

export default connect(
  mapStateToProps,
)(DeckView)