import React, { Component } from 'react';
import {fetching} from "../fetching";

class Log extends Component{
    constructor(){
        super();
        this.state ={
            log: [],
        };

    }
    componentDidMount() {
        fetching()
            .then((data) => {
                this.setState({log: data.login})
            })
    }
    render(){
        return(
            <div className="login-style">
                <p>{this.state.log} </p>
            </div>
        )
    }
}
export default Log