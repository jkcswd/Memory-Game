import React, { useEffect, useState } from 'react';

import './App.css';
import Card from './components/Card';

const App = () => {
  const [memoryArray, setMemoryArray] = useState([
    'Forest',
    'Mountain',
    'Swamp',
    'Lake',
    'Ocean',
    'Mangrove',
    'Coral-Reef',
    'Hot-Springs',
    'Volcano',
    'Savanna',
    'Rain-Forest',
    'River'
  ])
  const [alreadySelectedArray, setAlreadySelectedArray] = useState([]) // To compare against card clicked.
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    // setting state is async thus must update high score on rerender after state updated.
    if (score > highScore) { setHighScore(score) }
  }, [score, highScore]);

  const shuffle = (array) => {
    // Fisher-Yates shuffle algorithm.
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const shuffleArray = () => {
    setMemoryArray([...shuffle(memoryArray)]) // Spread to trigger rerender as React does not recognize state change.
  }

  const compareCard = (e) => {
    if (!alreadySelectedArray.some(element => element === e.target.dataset.name)) {
      setAlreadySelectedArray([...alreadySelectedArray, e.target.dataset.name]);
      setScore(score + 1);
    } else { 
      setScore(0); 
      setAlreadySelectedArray([])
    }
  }

  return (
    <div className="App">
      <header>
        Nature Memory Game
        <div className="score"> Score:{score} | High Score:{highScore} | (Do not click on the same image twice!)</div>
      </header>
      <main>
        <div className="card-container">
          {memoryArray.map(element => { // Array randomised by shuffleArray which also triggers new render.
            return (
              <Card 
                cardName={element} 
                shuffleArray={shuffleArray}
                compareCard={compareCard}
                imageURl={`/images/${element}.jpg`}
              />
            )
          })}
        </div>
      </main>
      <footer>Made by James Spencer</footer>
    </div>
  );
}

export default App;
