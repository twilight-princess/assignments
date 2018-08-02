import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import axios from 'axios'
import { getTodos } from './redux'
import Todo from './Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: ""  
    }
    handleChange = this.handleChange.bind(this)
    handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getTodos()
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const newTodo = {
      title: this.state.title,
      desccription: this.state.description
    }
    this.props.addTodo(this.state)
    this.setState({
      title: "",
      description: ""
    })
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <h1>Todos</h1>
        { this.props.todos.map(todo => {
            return <Todo {...todo}/>
        })}
      </div>
    );
  }
}

export default connect((state=>state, { getTodos, addTodo }))(App)