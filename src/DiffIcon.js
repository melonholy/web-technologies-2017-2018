import React, { Fragment } from 'react';
import { Icon } from "./components/Icons";
function Image(props){
    if(!props.src){
                return null
                }
    return(
                <img alt="Your avatar" src={props.src} className={props.className}/>
        )

}
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
function List(props) {
    if (props.from.length === 0) {
        return(
            <p>Empty</p>
        )
    }
    else
        return (
            <ul className={props.className}>
                {props.from.map((item, i) => <li key={i}>{item[props.property]}</li>)}
            </ul>
        )

}
export {Text,Link,List,Image}