import React from 'react'
import {
  cardWrapper,
  card,
  cardFlipped,
  cardMatched,
  cardBack,
  cardFront
} from './Card.module.scss'

const Card = ({ handleClick, icon, isFlipped, isMatched }) => {
  return (
    <div className={cardWrapper} onClick={handleClick}>
      <div
        className={[
          card,
          isFlipped ? cardFlipped : '',
          isMatched ? cardMatched : ''
        ].join(' ')}
      >
        <div className={cardBack}></div>
        <div className={cardFront}>{icon}</div>
      </div>
    </div>
  )
}

export default Card
