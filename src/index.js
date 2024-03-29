import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './App';

// FIXME - this would be an external API URL
axios.defaults.baseURL = process.env.PUBLIC_URL;
axios.interceptors.request.use(request => {
    // for API debug   console.debug(request);
    return request;
});


ReactDOM.render(<App />, document.getElementById('root'));