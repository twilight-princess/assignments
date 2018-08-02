import React, { Component } from 'react'

class Person extends Component {
    render() {
        return(
            <div className="peeps">
                <img src={this.props.img} alt={this.props.name} />
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Person
