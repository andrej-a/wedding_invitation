import React from 'react';

import { useAppSelector } from '@/hooks/useStore';

import Details from '../Details';
import Dressing from '../Dressing';
import ErrorBoundary from '../ErrorBoundary';
import Final from '../Final';
import Invitation from '../Invitation';
import Location from '../Location';
import Main from '../Main';
import Modal from '../Modal';
import PreviewOverlay from '../PreviewOverlay';
import Timing from '../Timing';

const App = () => {
    const { isShowModal } = useAppSelector(store => store.mainSlice);
    return (
        <ErrorBoundary>
            <PreviewOverlay />
            <Main />
            <Invitation />
            <Timing />
            <Location />
            <Details />
            <Dressing />
            <Final />
            {isShowModal && <Modal />}
        </ErrorBoundary>
    );
};

export default App;
