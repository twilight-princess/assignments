import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Card from './Card'
import Deck from './Deck'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Click an option below to make a deck or view your deck!</h3>
        <Link to="/card" className="cardLink">Card</Link>
        <Link to="/deck" className="deckLink">Deck</Link>
      </div>
    );
  }
}

export default App;
