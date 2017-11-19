import React from 'react'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { NavigationActions } from 'react-navigation'
import {
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
} from 'react-native'
import { saveDeck } from '../utils/storage'
import styles from '../styles'

class NewCardView extends React.Component {

  state = {
    question: '',
    answer: ''
  }

  onQuestionChanged (question) {
    this.setState({
      question
    })
  }

  onAnswerChanged (answer) {
    this.setState({
      answer
    })
  }

  submit () {
    const { deck, dispatch, navigation } = this.props
    const { title } = deck
    const { question, answer } = this.state
    const newCardArray = deck.cards.concat({question, answer})
    const newCard = { question, answer }
    const updatedDeck = {
      title,
      cards: deck.cards.concat(newCard)
    }
    saveDeck(title, updatedDeck)
    dispatch(addDeck({
      [updatedDeck.title]: updatedDeck
    }))
    navigation.goBack()
  }

  render () {
    const { question, answer} = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.title}>New Card</Text>
        <Text style={{fontWeight: 'bold'}}>Question: </Text>
        <TextInput placeholder="Enter question here" style={styles.textInput} value={question} onChangeText={this.onQuestionChanged.bind(this)}></TextInput>
        <Text style={{fontWeight: 'bold'}}>Answer: </Text>
        <TextInput placeholder="Enter answer here" style={styles.textInput} value={answer} onChangeText={this.onAnswerChanged.bind(this)}></TextInput>
        <TouchableHighlight onPress={this.submit.bind(this)}> 
          <Text style={[styles.button, styles.buttonBlue]}>SUBMIT</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
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
  mapStateToProps
)(NewCardView)