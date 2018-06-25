import React,{Component} from 'react'
import { connect } from 'react-redux'
import { List } from "../DiffIcon";
import {sendFollow} from '../store/actions/index';

    class Followers extends Component{
        componentDidMount = () => {
            this.props.sendFollow(this.props.store)
                };
        render(){
            return(
                <List from={this.props.store.info.followers} property='login'/>
            )
                    }
    }

export default connect(
        state => ({store: state}),
        dispatch => ({
            sendFollow: (state) => {
               dispatch(sendFollow(state))
            }
   }))(Followers)