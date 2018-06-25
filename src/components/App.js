import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getInfo} from "../store/actions/index";
import NameLog from  './NameLog'
import {Image} from '../DiffIcon'

class CommonInfo extends Component {
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

                <div className="lil">
                    <div>
                        <input type="text" id='search'/>
                        <button onClick={this.run}>asd</button>
                    </div>
                    <div>
                        <Image className="img-style" src={this.props.store.User_Info.avatar}/>
                        <NameLog/>
                    </div>
                </div>
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

