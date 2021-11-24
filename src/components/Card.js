import '../styles/Card.css';

import React from 'react';

const Card = (props) => {
  return (
    <div 
      className="Card" 
      onClick={(e) => {props.shuffleArray(); props.compareCard(e);}}
      data-name={props.cardName} // Use data attribute to access from click event.
    > 
      {props.cardName}
    </div>
  )
}

export default Card