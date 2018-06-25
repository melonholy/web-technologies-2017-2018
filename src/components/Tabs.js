import React, { Component, Fragment } from 'react'
import Repos from './Repos';
import Followers from './Follows';
import { Switch, Route } from 'react-router'

 class TabPanels extends Component{
    render(){
        return (
            <div className="tab" onClick={this.props.onClick}>{this.props.children}</div>
        )
    }
}

 class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            content: {
                0: '',
                1: '',
                2: ''
            },
            isEditable: false
        }
    }
    changeTab(index) {
        this.setState({ activeTab: index })
    };

    handleChange = (e) => {
        let text = e.target.value;
        this.setState(prevState => (
                {
                    content: Object.assign(prevState.content, { [this.state.activeTab]: text })
                }
            )
        )
    };

    changeEditMode = () => {
        this.setState(prevState => ({
            isEditable: !prevState.isEditable
        }))
    };

    render() {
        const children = React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                isActive: this.state.activeTab === index,
                onClick: this.changeTab.bind(this, index)
            })
        });
        return (
            <Fragment>
                <div className='tabs-container'>
                    {children}
                </div>
                <Switch>
                    <Route exact path='/' render={() => {
                        return (
                            <div className='tab-content'>
                                <button className='edit-button' onClick={this.changeEditMode}>{this.state.isEditable ? 'Save' : 'Edit'}</button>
                                <textarea className='text-area' readOnly={!this.state.isEditable} onChange={this.handleChange} value={this.state.content[this.state.activeTab]} />
                            </div>)
                    }} />

                    <Route path='/followers' component={Followers} />
                    <Route path='/repos' component={Repos} />
                </Switch>
            </Fragment>
        )
    }
}
export {Tabs,TabPanels};