import React from 'react';

import Details from '../Details';
import Dressing from '../Dressing';
import ErrorBoundary from '../ErrorBoundary';
import Final from '../Final';
import Invitation from '../Invitation';
import Location from '../Location';
import Main from '../Main';
import PreviewOverlay from '../PreviewOverlay';
import Timing from '../Timing';

const App = () => {
    return (
        <ErrorBoundary>
            {/* <PreviewOverlay /> */}
            <Main />
            <Invitation />
            <Timing />
            <Location />
            <Details />
            <Dressing />
            <Final />
        </ErrorBoundary>
    );
};

export default App;
