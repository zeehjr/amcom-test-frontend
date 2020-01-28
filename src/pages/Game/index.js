import React, { useCallback, useEffect } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import Cards from './components/Cards'
import { startGame } from '../../store/game/actions'
import { root } from './Game.module.scss'

const Game = () => {
  const dispatch = useDispatch()
  const started = useSelector(store => store.game.started)
  const cards = useSelector(store => store.game.cards)
  const turn = useSelector(store => store.game.turn)

  console.log(turn)

  useEffect(() => {
    dispatch(startGame())
  }, [])

  console.log({ started, cards })

  if (!started) {
    return (
      <div className={root}>
        <button onClick={() => dispatch(startGame())}>Start Game</button>
      </div>
    )
  }

  return (
    <div className={root}>
      <h5>{`Turn: ${turn}`}</h5>
      <Cards cards={cards} />
    </div>
  )
}

export default Game
