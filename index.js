import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommonInfo from './components/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import  reducer from './store/reducers/combRed'
import UserTabs from "./components/Tabs"

const store = createStore(reducer, applyMiddleware(thunk));
export default store;

store.subscribe(() => {
    console.log('State: ', store.getState());
});


ReactDOM.render(
    <Provider store ={store}>
        <CommonInfo/>
    </Provider>, document.getElementById('root'));
ReactDOM.render(
    <Fragment>
        <UserTabs/>
    </Fragment>,document.getElementById('tabs'))
registerServiceWorker();
