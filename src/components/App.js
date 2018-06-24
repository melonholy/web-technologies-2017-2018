import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import {getInfo} from "../store/actions/index";
import { faLink,faMapMarkerAlt,faUsers} from '@fortawesome/fontawesome-free-solid'
import {Link,Text} from "../DiffIcon";
import UserTabs from "./Tabs"

class CommonInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
        this.getUser = this.getUser.bind(this);

    }

    getUser() {
        this.props.getInfo();
    }

    render() {
        if (this.props.store.User_Info) {
            return (
                <Fragment>
                    <div>
                        <button onClick={this.getUser}>Find</button>
                    </div>
                    <img className="img-style" src={this.props.store.User_Info.avatar}/>
                    <Text className="name-style" value={this.props.store.User_Info.name}/>
                    <Text className="login-style" value={this.props.store.User_Info.login}/>
                    <Link value={this.props.store.User_Info.email} icon={faLink}/>
                    <Text className="bio-style" value={this.props.store.User_Info.bio}/>
                    <Text className="location-style" value={this.props.store.User_Info.loc} icon={faMapMarkerAlt}/>
                    <Text className="company-style" value={this.props.store.User_Info.company} icon={faUsers}/>
                    <Link className="blog-style" value={this.props.store.User_Info.blog} icon={faLink}/>
                    <UserTabs/>
                </Fragment>
            );
        }
    }
}



export default connect(
    state => ({store: state}),
    dispatch => ({
        getInfo: () => {
            dispatch(getInfo())
        }
    }))(CommonInfo)

