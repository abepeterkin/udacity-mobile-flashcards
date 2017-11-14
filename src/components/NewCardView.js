import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions'
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
    console.warn(deck)
    const { title } = deck
    const { question, answer } = this.state
    const newCardArray = deck.cards.concat({question, answer})
    const newCard = { question, answer }
    saveDeck(title, {
        title,
        cards: deck.cards.concat(newCard)
      }
    )
    dispatch(addCard(title, newCard))
    //TODO: navigates back before the previous screen has updated. Fix somehow?
    navigation.goBack()
  }

  render () {
    const { question, answer} = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>New card view</Text>
        <Text>Question: </Text>
        <TextInput value={question} onChangeText={this.onQuestionChanged.bind(this)}></TextInput>
        <Text>Answer: </Text>
        <TextInput value={answer} onChangeText={this.onAnswerChanged.bind(this)}></TextInput>
        <TouchableHighlight style={styles.button} onPress={this.submit.bind(this)}> 
          <Text>SUBMIT</Text>
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