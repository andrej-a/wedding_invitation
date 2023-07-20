import React from 'react';

import Invitation from '../Invitation';
import Location from '../Location';
import Main from '../Main';
import PreviewOverlay from '../PreviewOverlay';

const App = () => {
    return (
        <>
            {/* <PreviewOverlay /> */}
            <Main />
            <Invitation />
            <Location />
        </>
    );
};

export default App;
