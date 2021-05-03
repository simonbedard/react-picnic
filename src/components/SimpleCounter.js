import React, { Component } from 'react'

export default class SimpleCounter extends Component {

    constructor(props){
        super(props);

        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);

        this.state = {
            count: 0
        };
       
    }

    addOne(){
        this.setState({
            count : this.state.count + 1
        });
    }
    minusOne(){
        this.setState({
            count : this.state.count - 1
        });
    }
    render() {
        return (
            <div>
                <h2>Simple counter</h2>
                <button onClick={this.minusOne} type='button'>-1</button>
                <code>{this.state.count}</code>
                <button onClick={this.addOne} type='button'>+1</button>
            </div>
        )
    }
}
