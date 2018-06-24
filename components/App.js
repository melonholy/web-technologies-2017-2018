import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import {getInfo} from "../store/actions/action";
import {fetching} from "../fetching";
import { faLink,faMapMarkerAlt,faUsers} from '@fortawesome/fontawesome-free-solid'
import {Link,Text} from "../DiffIcon";

class CommonInfo extends Component {
    constructor() {
        super();
        this.state = {
            data: {}
        };
    }
    componentDidMount() {
        fetching()
            .then((data) => {
                this.setState({
                    data: {
                        pictures: data.avatar_url,
                        blog: data.blog,
                        bio: data.bio,
                        loc: data.location,
                        email: data.email,
                        work: data.company,
                        name: data.name,
                        login: data.login,

                }
            })
     })
    }
  render() {
    return (
        <Fragment>
            <img className="img-style" src={this.state.data.pictures} />
            <Text className="name-style" value ={this.state.data.name}/>
            <Text className="login-style" value ={this.state.data.login}/>
            <Link value ={this.state.data.email} icon ={faLink}/>
            <Text className="bio-style" value={this.state.data.bio}/>
            <Text className="location-style" value ={this.state.data.loc} icon ={faMapMarkerAlt}/>
            <Text className="company-style" value ={this.state.data.work} icon ={faUsers}/>
            <Link className="blog-style" value ={this.state.data.blog} icon ={faLink}/>
        </Fragment>
    );
  }
}



export default connect(
    state =>({store:state}),
    dispatch=>({
        getInfo: () => {
            dispatch(getInfo())
        }
    }))(CommonInfo)

