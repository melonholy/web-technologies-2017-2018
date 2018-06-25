import React,{Fragment} from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import CommonInfo from './components/App';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import  reducer from './store/reducers/combRed'
import {Tabs,TabPanels} from './components/Tabs'
import {HashRouter,Link} from 'react-router-dom'


const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log('State: ', store.getState());
});
ReactDOM.render(
    <Provider store={store}>
        <Fragment>
            <CommonInfo/>
        </Fragment>
    </Provider>,
    document.getElementById("root"));
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Tabs>
                <TabPanels><Link to='/'>Основное</Link></TabPanels>
                <TabPanels><Link to='/'>Образование</Link></TabPanels>
                <TabPanels><Link to='/'>Контакты</Link></TabPanels>
                <TabPanels><Link to='/followers'>Followers</Link></TabPanels>
                <TabPanels><Link to='/repos'>Repositories</Link></TabPanels>
            </Tabs>
        </HashRouter>
    </Provider>,
    document.getElementById("tabs"))




