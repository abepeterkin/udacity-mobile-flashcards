import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

const initialState = {
  React: {
    title: 'React',
    cards: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    cards: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function decks(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case ADD_CARD:
      const deck = state[action.deckName]
      if (deck) {
        deck.cards.push(action.card)
        return {
          ...state,
          [action.deckName]: deck
        }
      } else {
        return state
      }
    default:
      return state;
  }
}

export default decks