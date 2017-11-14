import React from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import styles from '../styles'

class QuizView extends React.Component {

  state = {
    currentCardNum: 0,
    correctAnswers: 0
  }

  restart () {
    this.setState({
      currentCardNum: 0,
      correctAnswers: 0
    })
  }

  correctAnswer () {
    this.setState({
      currentCardNum: this.state.currentCardNum + 1,
      correctAnswers: this.state.correctAnswers + 1
    })
  }

  incorrectAnswer () {
    this.setState({
      currentCardNum: this.state.currentCardNum + 1,
    })
  }

  render() {
    const { currentCardNum, correctAnswers } = this.state
    const { cards } = this.props.deck
    const totalCards = cards.length
    // console.warn(`RENDER CALLED, ${currentCardNum} ${correctAnswers}`)
    if (currentCardNum >= totalCards) {
      return (
        <View style={styles.container}>
          <Text> Percentage correct: {(correctAnswers / totalCards) * 100}%</Text>
          <TouchableHighlight style={styles.button} onPress={this.restart.bind(this)}> 
            <Text>RESTART QUIZ</Text> 
          </TouchableHighlight>
        </View>
      )
    } else {
      const card = cards[currentCardNum]
      return (
        <View style={styles.container}>
          <Text>Card {currentCardNum + 1}/{totalCards}</Text>
          <Text>QUESTION: {card.question}</Text>
          <Text>ANSWER: {card.answer}</Text>
          <TouchableHighlight style={styles.button} onPress={this.correctAnswer.bind(this)}> 
            <Text>CORRECT</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.incorrectAnswer.bind(this)}>
            <Text>INCORRECT</Text>
          </TouchableHighlight>
        </View>
      )
    }
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
)(QuizView)
