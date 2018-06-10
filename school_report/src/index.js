import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Report from "./views/Report";

ReactDOM.render(<Report />, document.getElementById('root'));
registerServiceWorker();
