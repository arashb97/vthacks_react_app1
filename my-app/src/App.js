import React from 'react';
//import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import Flashcard from './components/Flashcard';

function App() {
  return (
    <div className="App">
      <AppHeader currDeck="Basic Phrases"/>
      <Flashcard hint="Thank You" answer="&#x3042;&#x308A;&#x304C;&#x3068;"/>
    </div>
  );
}

export default App;
