import React, { Component } from 'react'

export default class MyFirstReactComponents extends Component {
    constructor(){
        super();
        this.state = {
            currentDate:  new Date(),
        }
    }

    render() {
        return (
            <div>
                <h2>This is my first ever react Component</h2>
                <h4>This is so mutch fun 🤣</h4>
                <p>Let's do something very simple: <strong>Output the current date.</strong></p>
                <code>It is: {this.state.currentDate.toLocaleTimeString()}</code>
            </div>
        )
    }
}
