import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import {getInfo} from "../store/actions/index";
import {Text,Link} from "../DiffIcon";
import { faUsers, faMapMarkerAlt, faLink} from '@fortawesome/fontawesome-free-solid'
class NameLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
        this.run = this.run.bind(this);

    }

    run() {
        this.props.getInfo();
    }

    render() {
        if (this.props.store.User_Info) {
            return (
                    <Fragment>
                        <Text className="name-style" value={this.props.store.User_Info.name}/>
                        <Text className="login-style" value={this.props.store.User_Info.login}/>
                        <Link value={this.props.store.User_Info.email} icon={faLink}/>
                        <Text className="bio-style" value={this.props.store.User_Info.bio}/>
                        <Text className="location-style" value={this.props.store.User_Info.loc} icon={faMapMarkerAlt}/>
                        <Text className="company-style" value={this.props.store.User_Info.company} icon={faUsers}/>
                        <Link className="blog-style" value={this.props.store.User_Info.blog} icon={faLink}/>
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
    }))(NameLog)
