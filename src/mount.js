import 'whatwg-fetch';

import {render} from 'react-dom';
import React from 'react';
import App from './app';
import 'STYLES/reset.css';

const rootEl = document.getElementById('container');
render(<App/>, rootEl);
if (module.hot) {
    module.hot.accept('containers/Home/index', () => {
        render( < App/>, rootEl);
    });
}
