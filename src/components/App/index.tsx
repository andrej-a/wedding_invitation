import React from 'react';

import Invitation from '../Invitation';
import Location from '../Location';
import Main from '../Main';
import PreviewOverlay from '../PreviewOverlay';
import Timing from '../Timing';

const App = () => {
    return (
        <>
            {/* <PreviewOverlay /> */}
            <Main />
            <Invitation />
            <Timing />
            <Location />
        </>
    );
};

export default App;
