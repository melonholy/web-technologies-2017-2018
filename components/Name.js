import React, { Component } from 'react';
import {fetching} from "../fetching";

class Name extends Component{
    constructor(){
        super();
        this.state ={
            name: [],
        };

    }
    componentDidMount() {
        fetching()
            .then((data) => {
                this.setState({name: data.name})
            })
    }
    render(){
        return(
            <div className="name-style">
                <p>{this.state.name} </p>
            </div>
        )
    }
}
export default Name