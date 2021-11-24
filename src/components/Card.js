import '../styles/Card.css';

import React from 'react';

const Card = (props) => {
  return (
    <div 
      className="Card" 
    > 
      <img 
        src={props.imageURl} 
        alt={props.cardName}
        onClick={(e) => {props.shuffleArray(); props.compareCard(e);}}    
        data-name={props.cardName} // Use data attribute to access from click event.
      />
    </div>
  )
}

export default Card