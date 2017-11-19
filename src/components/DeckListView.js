import React from 'react'
import { connect } from 'react-redux'
import {
  Text,
  ScrollView,
  TouchableHighlight,
  Animated
} from 'react-native'
import styles from '../styles'

class DeckListView extends React.Component {

  render() {
    const { decks, screenProps } = this.props
    return (
      <ScrollView contentContainerStyle={{backgroundColor: '#fff', justifyContent: 'center'}}>
       {Object.keys(decks).map((key) => {
          const deck = decks[key]
          const numCards = deck.cards.length
          return (
            <Deck key={key} numCards={numCards} title={deck.title} navigation={screenProps.stackNavigation}/>
          )
        })}
      </ScrollView>
    )
  }
}

class Deck extends React.Component {

  state = {
    animationValue: new Animated.Value(1),
  }

  componentWillUnmount () {
    this.state.animationValue.removeAllListeners()
  }

  navigateToDeckView () {
    const { animationValue } = this.state
    Animated.sequence([
      Animated.timing(animationValue, { duration: 100, toValue: 1.2 }),
      Animated.timing(animationValue, { duration: 100, toValue: 1.0 })
    ]).start(() => {
      this.props.navigation.navigate('DeckView', { title: this.props.title })
    })
  }
  
  render () {
    const { animationValue } = this.state
    const { title, numCards } = this.props
    return (
      <Animated.View style={{transform: [{ scale: animationValue }]}}>
        <TouchableHighlight 
        style={styles.deck} 
        onPress={this.navigateToDeckView.bind(this)}>
          <Text style={{fontWeight: 'bold'}}> {title} ({numCards === 1 ? `${numCards} card` : `${numCards} cards`})</Text>
        </TouchableHighlight>
      </ Animated.View>
      )
  }
}

const mapStateToProps = decks => ({ decks })

export default connect(
  mapStateToProps,
)(DeckListView)