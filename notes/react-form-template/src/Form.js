import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: props.inputs
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        const { name, value } = e.target
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handeSubmit(e) {
        e.preventDefault()
        this.props.submit(this.state.inputs)
    }
    reset() {
        // idk
        this.setState = {prevState}
    }
    render() {
        return (
            <div>
                {this.props.render({
                    inputs: this.state.inputs,
                    
                })}
            </div>
        )
    }
}

export default Form