import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: `hotpink`
    }
  }

  componentDidMount() {
    window.addEventListener('keypress', (e) => {
      if(e.key === 'a') {
        this.setState({
          color: 'cornflowerblue'
        })
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keypress')
  }

  render() {
    return (
      <div style={{backgroundColor: this.state.color, color: 'white'}}>
        Hello
      </div>    
    )
  }
}

export default App