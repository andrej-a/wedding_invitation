import React from 'react';

import Details from '@/components/Details';
import Dressing from '@/components/Dressing';
import Final from '@/components/Final';
import Invitation from '@/components/Invitation';
import Location from '@/components/Location';
import Main from '@/components/Main';
import PreviewOverlay from '@/components/PreviewOverlay';
import Timing from '@/components/Timing';
import { useAppSelector } from '@/hooks/useStore';

const MainPage = () => {
    return (
        <>
            {/* <PreviewOverlay /> */}
            <Main />
            <Invitation />
            <Timing />
            <Location />
            <Details />
            <Dressing />
            <Final />
        </>
    );
};

export default MainPage;
