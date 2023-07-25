import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import GlobalStyle from './globalStyles';
import store from './store';

const Root = () => {
    return (
        <Provider store={store}>
            <App />
            <GlobalStyle />
        </Provider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
