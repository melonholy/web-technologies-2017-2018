import React, { Component } from 'react';
import {fetching} from "../fetching";


class Info extends Component{
    constructor(){
        super();
        this.state ={
            info: [],
        };

    }
    componentDidMount() {
        fetching()
            .then((data) => {
                this.setState({info: data.bio})
            })
    }
    render(){
        return(
            <div className="bio-style">
                <p>{this.state.info} </p>
            </div>
        )
    }
}
export default Info