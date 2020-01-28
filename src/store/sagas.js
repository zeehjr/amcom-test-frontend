import { takeEvery, select, call, put } from 'redux-saga/effects'
import { unturnCards, matchedCards, increaseTurn } from './game/actions'
import { TURN_CARD, UNTURN_CARDS } from './game/types'

const delay = delayMs => new Promise(resolve => setTimeout(resolve, delayMs))

function * checkCards (action) {
  const game = yield select(store => store.game)

  console.log(game)

  if (game.cardTwo != null) {
    yield put(increaseTurn())
    if (game.cardOne.value === game.cardTwo.value) {
      yield put(matchedCards(game.cardOne, game.cardTwo))
      yield put(unturnCards())
      return
    }
    yield call(delay, 1000)
    yield put(unturnCards())
  }
  console.log(action)
}

export function * saga () {
  yield takeEvery(TURN_CARD, checkCards)
}
