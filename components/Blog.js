import React, { Component } from 'react';
import {fetching} from "../fetching";
import { faLink} from '@fortawesome/fontawesome-free-solid'
import {Link} from "../DiffIcon";

class Blog extends Component{
    constructor(){
        super();
        this.state ={
            blog: [],
        };

    }
    componentDidMount() {
        fetching()
            .then((data) => {
                this.setState({blog: data.blog})
            })
    }
    render(){
        return(
            <div>
                <Link className="blog-style" value ={this.state.blog} icon ={faLink}/>
            </div>
        )
    }
}
export default Blog