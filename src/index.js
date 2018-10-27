import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Root from './components/Root';
import registerServiceWorker from './services/registerServiceWorker';

render(<Root />, document.getElementById('root'));
registerServiceWorker();
