import React, { Component } from 'react';
import {fetching} from "../fetching";
import { faUsers} from '@fortawesome/fontawesome-free-solid'
import {Text} from "../DiffIcon";

class Work extends Component{
    constructor(){
        super();
        this.state ={
            company: [],
        };

    }
    componentDidMount() {
        fetching()
            .then((data) => {
                this.setState({company: data.company})
            })
    }
    render(){
        return(
           <div>
               <Text className="company-style" value ={this.state.company} icon ={faUsers}/>
           </div>
        )
    }
}
export default Work