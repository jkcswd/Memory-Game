import './App.css';
import React, { useState } from 'react';

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

  return (
    <div className="App">
      <header>Nature Memory Game</header>
      <main>
        <div className="card-container"></div>
      </main>
      <footer>Made by James Spencer</footer>
    </div>
  );
}

export default App;
