import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommonInfo from './components/App';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import  reducer from './store/reducers/combRed'


const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log('State: ', store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <CommonInfo/>
    </Provider>, document.getElementById("root"));


