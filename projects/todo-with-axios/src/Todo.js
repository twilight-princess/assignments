import React, { Component } from 'react';
import axios from 'axios'

class Todo extends Component {
  state = {
    list: [],
    title: '',
    description: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  handleSubmit = () => {
    axios.post(`https://api.vschool.io/darlene/todo`, {title: this.state.title, description: this.state.description} )
      .then(res => {
        console.log(res)
      })
  }

  removeTodo = (todo) => {
    axios.delete(`https://api.vschool.io/darlene/todo/${todo._id}`)
      .then(response => {
        console.log(response + "removed")
      })
  }

  componentDidMount() {
    axios.get("https://api.vschool.io/darlene/todo")
      .then(response => {
        const list = response.data
          this.setState({ list })
      })

  }

  render() {
    const list = this.state.list
    return (
      <div className="todo styled">
      <style dangerouslySetInnerHTML={{__html: `
        .styled { color: purple; }
        a { color: red; text-decoration: none; }
        @media (max-width: 600px) {
          .styled { color: fuchsia; }
        }
      `}} />
        <ol><h1>Todo List</h1>
          {list.map((todo, i) => <li key={i}>{ todo.title } - { todo.description } <b><a href="" onClick={this.removeTodo(todo)}>X</a></b></li> )}
        </ol>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        <br />
        <br />
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        <br />
        <br />
        <button type="Submit" onClick={() => { this.handleSubmit }}>Add</button>
      </div>
    );
  }
}

export default Todo;
