import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './components';
import register from './registerServiceWorker';

render(<App message="Hey World" />, document.getElementById('root'));

register();
