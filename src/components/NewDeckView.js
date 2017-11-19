import React from 'react'
import { connect } from 'react-redux'
import {
  Text,
  KeyboardAvoidingView,
  TouchableHighlight,
  TextInput
} from 'react-native'
import { saveDeck } from '../utils/storage'
import { addDeck } from '../actions'
import styles from '../styles'

class NewDeckView extends React.Component {
  state = {
    title: ''
  }

  onTitleChanged (title) {
    this.setState({
      title
    })
  }

  submit () {
    const { dispatch, navigation } = this.props
    navigation.goBack()
    const newDeck = {
      title: this.state.title,
      cards: []
    }
    saveDeck(this.state.title, newDeck)
    dispatch(addDeck({
      [this.state.title]: newDeck
    }))
    navigation.goBack()
  }

  render() {
    const { title } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.title}> Title of new deck: </Text>
        <TextInput placeholder="Enter new title here" style={styles.textInput} value={title} onChangeText={this.onTitleChanged.bind(this)}></TextInput>
        <TouchableHighlight onPress={this.submit.bind(this)}> 
          <Text style={[styles.button, styles.buttonBlue]} >SUBMIT</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewDeckView)