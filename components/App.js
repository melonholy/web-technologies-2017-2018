import React, { Component } from 'react';
import Icon from './Icon.js'
import Log from './log.js'
import Name from './Name.js'
import Info from './Info.js'
import Work from  './Work.js'
import Location from "./Location";
import Email from "./Email";
import Blog from "./Blog";
import UserTabs from "./Tabs";

class CommonInfo extends Component {
  render() {
    return (
        <div className="lil">
            <div>
                <Icon />
                <Name />
                 <Log />
                <Info />
                <Work />
                <Location/>
                <Email/>
                <Blog/>
            </div>
            <div>
                <UserTabs/>
            </div>
        </div>
    );
  }
}



export default CommonInfo;
