import React, { Component } from 'react';
import {fetching} from "../fetching";
import { faMapMarkerAlt} from '@fortawesome/fontawesome-free-solid'
import {Text} from "../DiffIcon";

class Location extends Component{
    constructor(){
        super();
        this.state ={
            location: [],
        };

    }
    componentDidMount() {
        fetching()
            .then((data) => {
                this.setState({location: data.location})
            })
    }
    render(){
        return(
            <div>
                <Text className="location-style" value ={this.state.location} icon ={faMapMarkerAlt}/>
            </div>
        )
    }
}
export default Location