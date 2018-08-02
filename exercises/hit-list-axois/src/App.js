import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Person from './Person'

class App extends Component {

  state = {
    hitlist: []
  }

  componentDidMount() {
    axios.get('http://api.vschool.io:6543/hitlist.json')
      .then(response => {
        const list = response.data;
        this.setState({hitlist: list})
      }) 
    }
  render() {
    return (
      <div className="App">
        <h2>
          Don Corleone's Hit List
        </h2>
        <div>
          {this.state.hitlist.map((person, i) => <Person key={i + person.name} name={person.name} img={person.image} />)}
        </div>
      </div>
    );
  }
}

export default App;
