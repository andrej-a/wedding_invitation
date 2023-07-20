import React from 'react';

import Invitation from '../Invitation';
import Main from '../Main';
import PreviewOverlay from '../PreviewOverlay';

const App = () => {
    return (
        <>
            <PreviewOverlay />
            <Main />
            <Invitation />
        </>
    );
};

export default App;
