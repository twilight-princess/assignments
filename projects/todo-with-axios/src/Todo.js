import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form'

class Todo extends Component {
  state = {
    list: [],
    title: '',
    description: '', 
    price: ''
  }

  addItem = item => {
    this.setState({list: [...this.state.list, item]})
  }

  removeTodo = todo => {
    axios.delete(`https://api.vschool.io/darlene/todo/${todo._id}`)
      .then(response => {
        console.log(response + "removed")
      })
  }

  componentDidMount() {
    axios.get("https://api.vschool.io/darlene/todo")
      .then(response => {
        const list = response.data
          this.setState({list: list})
      })

  }

  render() {
    const list = this.state.list
    return (
      <div className="todo styled">
        <h1>Todo List</h1>
        <Form addItem={this.addItem}/>
        {/* this.props.render(this.state) */}
        <ol>
          { list.map((todo, i) => <li key={i}>{ todo.title } - { todo.description } - { todo.price } </li>) }
        </ol>
      </div>
    );
  }
}

export default Todo;
