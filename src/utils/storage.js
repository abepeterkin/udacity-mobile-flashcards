import { AsyncStorage } from 'react-native'
const DECK_STORAGE_KEY = 'mobile-flashcards:decks'

function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(result => {
    return JSON.parse(result)
  })
}

function saveDeck(title, deck) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: deck
  }))
}

module.exports = {
  fetchDecks,
  saveDeck
}