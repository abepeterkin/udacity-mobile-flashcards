import React from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import styles from '../styles'
import { setLocalNotification, clearLocalNotification } from '../utils/notifications'
import { lightGray } from '../styles/colors'

const initialState = {
  currentCardNum: 0,
  correctAnswers: 0,
  answerVisible: false
}
class QuizView extends React.Component {

  state = initialState

  restart () {
    this.setState(initialState)
  }

  correctAnswer () {
    this.setState({
      currentCardNum: this.state.currentCardNum + 1,
      correctAnswers: this.state.correctAnswers + 1,
      answerVisible: false
    })
  }

  incorrectAnswer () {
    this.setState({
      currentCardNum: this.state.currentCardNum + 1,
      answerVisible: false
    })
  }

  viewAnswer () {
    this.setState({
      answerVisible: true
    })
  }

  render() {
    const { currentCardNum, correctAnswers, answerVisible } = this.state
    const { cards } = this.props.deck
    const totalCards = cards.length
    if (currentCardNum >= totalCards) {
      clearLocalNotification().then(setLocalNotification)
      return (
        <View style={styles.container}>
          <Text style={styles.title}> Percentage correct: {(correctAnswers / totalCards) * 100}%</Text>
          <TouchableHighlight onPress={this.restart.bind(this)}> 
            <Text style={[styles.button, styles.buttonBlue]}>RESTART QUIZ</Text> 
          </TouchableHighlight>
        </View>
      )
    } else {
      const card = cards[currentCardNum]
      return (
        <View style={styles.container}>
          <Text style={styles.title}>({currentCardNum + 1}/{totalCards}) {card.question}</Text>
          {answerVisible ? <Text style={styles.title}>ANSWER: {card.answer}</Text> 
            : <TouchableHighlight onPress={this.viewAnswer.bind(this)}>
                <Text style={[styles.title, styles.viewQuestion]}>Touch to see the answer</Text>
              </TouchableHighlight>
          }
          <TouchableHighlight onPress={this.correctAnswer.bind(this)}> 
            <Text style={[styles.button, styles.buttonGreen]}>CORRECT</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.incorrectAnswer.bind(this)}>
            <Text style={[styles.button, styles.buttonRed]}>INCORRECT</Text>
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
