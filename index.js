import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommonInfo from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommonInfo/>, document.getElementById('root'));
registerServiceWorker();
