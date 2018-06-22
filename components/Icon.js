import React, { Component } from 'react';
import {fetching} from "../fetching";

class Icon extends Component{
    constructor(){
        super();
        this.state ={
            pictures: [],
        };

    }
    componentDidMount() {
        fetching()
            .then((data) => {
                this.setState({pictures: data.avatar_url})
            })
    }
    render(){
        return(
            <div>
                <img className="img-style" src={this.state.pictures} />
            </div>
        )
    }
}
export default Icon