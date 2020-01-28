import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { turnCard } from '../../../store/game/actions'
import Card from './Card'
import Flamingo from '../images/Flamingo'
import Dog from '../images/Dog'
import Rabbit from '../images/Rabbit'
import Monkey from '../images/Monkey'
import Sheep from '../images/Sheep'
import Bear from '../images/Bear'
import Rooster from '../images/Rooster'
import Dolphin from '../images/Dolphin'
import Squirrel from '../images/Squirrel'
import Bull from '../images/Bull'

const imageMapper = {
  0: <Flamingo />,
  1: <Dog />,
  2: <Rabbit />,
  3: <Monkey />,
  4: <Sheep />,
  5: <Bear />,
  6: <Rooster />,
  7: <Dolphin />,
  8: <Squirrel />,
  9: <Bull />
}

const Cards = ({ cards }) => {
  const dispatch = useDispatch()
  const cardOne = useSelector(store => store.game.cardOne)
  const cardTwo = useSelector(store => store.game.cardTwo)
  const matchedCards = useSelector(store => store.game.matchedCards)

  console.log({ cardOne, cardTwo, matchedCards })

  const isVisible = useCallback(
    id => {
      if (cardOne?.id === id || cardTwo?.id === id) return true
      if (matchedCards.find(c => c.id === id)) return true

      return false
    },
    [cardOne, cardTwo, matchedCards]
  )

  const isMatched = useCallback(id => matchedCards.find(c => c.id === id), [
    matchedCards
  ])
  const isFlipped = useCallback(
    id => isMatched(id) || cardOne?.id === id || cardTwo?.id === id
  )

  return (
    <div className='mx-auto flex flex-row flex-wrap justify-center'>
      {cards.map(card => (
        <Card
          key={card.id}
          isFlipped={isFlipped(card.id)}
          isMatched={isMatched(card.id)}
          handleClick={() => dispatch(turnCard(card))}
          icon={imageMapper[card.value]}
        >
          {card}
        </Card>
      ))}
    </div>
  )
}

export default Cards
