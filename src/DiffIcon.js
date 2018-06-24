import React, { Fragment } from 'react';
import { Icon } from "./components/Icons";

function Text(props) {
    if(!props.value){
        return null;
    }
    return(
        <Fragment>
            <Icon icon={props.icon}/>
            <p className={props.className}>{props.value}</p>
        </Fragment>
    )
}

function Img(props) {
    if(!props.src){
        return null
    }
    return(
        <img alt="Your avatar" src={props.src} className={props.className}/>
        )
}

function Link(props) {
    if (!props.value) {
        return null
    }
    return (
        <Fragment>
            <Icon icon={props.icon}/>
            <a href={props.value} className={props.className}>{props.value}</a>
        </Fragment>
    )
}
export {Text,Img,Link}