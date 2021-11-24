import '../styles/Card.css';

import React from 'react';

const Card = (props) => {
  return (
    <div className="Card" onClick={props.shuffleArray}> 
      {props.cardName}
    </div>
  )
}

export default Card