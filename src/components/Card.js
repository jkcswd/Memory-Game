import '../styles/Card.css';

import React from 'react';

const Card = (props) => {
  return (
    <div 
      className="Card" 
      onClick={(e) => {props.shuffleArray(); props.compareCard(e);}}
      data-name={props.cardName} // Use data attribute to access from click event.
    > 
      <img src={props.imageURl} alt={props.cardName}/>
      {props.cardName}
    </div>
  )
}

export default Card