import * as Types from './types'

const INITIAL_STATE = {
  started: false,
  turn: 0,
  cards: [],
  finished: false,
  cardOne: null,
  cardTwo: null,
  matchedCards: []
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case Types.START_GAME: {
      console.log('STARTING GAME')
      return {
        ...INITIAL_STATE,
        cards: action.cards,
        started: true
      }
    }
    case Types.INCREASE_TURN: {
      return {
        ...state,
        turn: state.turn + 1
      }
    }
    case Types.UNTURN_CARDS: {
      console.log('UNTURN CALLED')
      return {
        ...state,
        cardOne: null,
        cardTwo: null
      }
    }
    case Types.TURN_CARD: {
      if (!state.cardOne) {
        return {
          ...state,
          cardOne: action.card
        }
      }
      if (!state.cardTwo) {
        if (state.cardOne.id === action.card.id) return state
        return {
          ...state,
          cardTwo: action.card
        }
      }
      return state
    }
    case Types.MATCHED_CARDS: {
      return {
        ...state,
        matchedCards: [...state.matchedCards, ...action.cards]
      }
    }
    case Types.FINISH_GAME: {
      return state
    }
    default: {
      return state
    }
  }
}
