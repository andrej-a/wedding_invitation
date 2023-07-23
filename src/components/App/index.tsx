import React from 'react';

import Details from '../Details';
import Dressing from '../Dressing';
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
            <Details />
            <Dressing />
        </>
    );
};

export default App;
