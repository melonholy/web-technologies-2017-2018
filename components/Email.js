import React, { Component } from 'react';
import {fetching} from "../fetching";
import { faLink} from '@fortawesome/fontawesome-free-solid'
import {Link} from "../DiffIcon";

class Email extends Component{
    constructor(){
        super();
        this.state ={
            email: [],
        };

    }
    componentDidMount() {
        fetching()
            .then((data) => {
                this.setState({email: data.email})
            })
    }
    render(){
        return(
            <div>
                <Link  value ={this.state.email} icon ={faLink}/>
            </div>
        )
    }
}
export default Email