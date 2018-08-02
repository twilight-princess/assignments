import React, { Component } from 'react';
import './App.css';
import './Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form 
          inputs={{
            name: "",
            occupation: ""
          }} 
          submit={inputData => alert(JSON.stringify(inputData))}
          render={props  => {
            const{handleSubmit, handleChange, inputs} = props
            return (
              <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputs.name} name="name" type="text" />
                <input onChange={handleChange} value={inputs.occupation} name="occupation" type="text" />
                <button>Submit</button>
              </form>
            )
          }}
        />
      </div>
    );
  }
}

export default App;
