import React, { useState } from 'react';

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
    'Coral Reef',
    'Hot Springs',
    'Volcano',
    'Savanna',
    'Rain Forest',
    'River'
  ])
  const [selectedArray, setSelectedArray] = useState([])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

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

  return (
    <div className="App">
      <header>Nature Memory Game</header>
      <main>
        <div className="card-container">
          {memoryArray.map(element => {
            return (
            <Card 
              cardName={element}  
              shuffleArray={shuffleArray}
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
