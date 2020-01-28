import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import auth from './ducks/auth'
import game from './game/reducer'
import { saga } from './sagas'

const reducers = combineReducers({
  auth,
  game
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)

export default store
