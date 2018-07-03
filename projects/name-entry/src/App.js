import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      names: ["Darlene Evans", "Austin Welch"]
    }
    this.addToList = this.addToList.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  addToList() {
    if (this.state.name) {
      this.setState(prevState => ({
        name: "",
        names: [...prevState.names, this.state.name]
      }))
    }
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">List of Names</h1>
          <h1>{this.state.name}</h1>
        </header>
        <input name="name" type="text" placeholder="Your Name" value={this.state.name} onChange={this.handleChange}/>
        <button type="submit" onClick={this.addToList}>Submit</button>
        <ol>
          {this.state.names.map(name => <li>{name}</li>)}
        </ol>
      </div>
    );
  }
}

export default App;
