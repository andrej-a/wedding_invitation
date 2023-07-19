import React from 'react';

import Main from '../Main';
import PreviewOverlay from '../PreviewOverlay';

type Props = {};

const App = (props: Props) => {
    return (
        <>
            <PreviewOverlay />
            <Main />
        </>
    );
};

export default App;
