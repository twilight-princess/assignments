import React, { Component } from 'react';
import './App.css';
import Resume from './Resume' 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + './pink.jpeg'} className="App-logo" alt="logo" />
          <h1 className="App-title">Darlene Welch</h1>
        </header>
        <p className="App-intro">
          <Resume />
        </p>
      </div>
    );
  }
}

export default App;
