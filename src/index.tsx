import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import GlobalStyle from './globalStyles';
import store from './store';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
                <GlobalStyle />
                <Toaster />
            </BrowserRouter>
        </Provider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
