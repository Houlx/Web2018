import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './CalCulator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator/>, document.getElementById('root'));
registerServiceWorker();
