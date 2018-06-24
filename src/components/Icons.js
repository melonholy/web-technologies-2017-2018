import React from "react"
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function Icon(props) {
    if(!props.icon){
        return null
    }
    return(
        <FontAwesomeIcon className="icons" icon={props.icon}/>
    )
}

export { Icon }