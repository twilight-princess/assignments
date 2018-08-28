import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'

class Form extends Component {
  constructor() {
    super()
    this.state = { }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    // console.log(this.state.list)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const todoItem = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price
    }
    axios.post(`https://api.vschool.io/darlene/todo`, todoItem)
      .then(res => {
        // console.log(res)
        this.props.addItem(res.data)
        // console.log(this.state.list)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <form name="todo-form">
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Todo Item" />
          <br />
          <br />
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Description..." />
          <br />
          <br />
          <input type="number" name="price" value={this.state.price} onChange={this.handleChange} placeholder="Price (number)" />
          <br />
          <br />
        <button type="Submit" onClick={this.handleSubmit}>Add</button>
      </form>
    )
  }
}

export default Form;