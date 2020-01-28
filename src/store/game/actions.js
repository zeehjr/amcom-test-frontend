import * as Types from './types'
import uuid from 'uuid/v4'

function shuffle (array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const createCards = () =>
  shuffle(
    Array.from(new Array(10)).reduce((current, v, i) => {
      return [...current, { id: uuid(), value: i }, { id: uuid(), value: i }]
    }, [])
  )

export const startGame = () => {
  return {
    type: Types.START_GAME,
    cards: createCards()
  }
}

export const increaseTurn = () => {
  return {
    type: Types.INCREASE_TURN
  }
}

export const unturnCards = () => {
  return {
    type: Types.UNTURN_CARDS
  }
}

export const matchedCards = (cardOne, cardTwo) => {
  return {
    type: Types.MATCHED_CARDS,
    cards: [cardOne, cardTwo]
  }
}

export const turnCard = card => {
  return {
    type: Types.TURN_CARD,
    card
  }
}
