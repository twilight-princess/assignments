import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'
import Form from './Form'

class App extends Component {
  render() {
    return (
      <Todo />
      // <Todo render={list => (
      //   <Form list={list} />
      // )}/>
    );
  }
}

export default App;
