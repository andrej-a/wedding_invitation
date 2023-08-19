import React, { useEffect } from 'react';

import Details from '@/components/Details';
import Dressing from '@/components/Dressing';
import Final from '@/components/Final';
import Invitation from '@/components/Invitation';
import Location from '@/components/Location';
import Main from '@/components/Main';
import PreviewOverlay from '@/components/PreviewOverlay';
import Timing from '@/components/Timing';
import { useParams } from 'react-router-dom';
import useGuests from '@/hooks/useGuests';

const MainPage = () => {
    const { userID } = useParams();
    const { recognizeGuest } = useGuests();

    useEffect(() => {
        recognizeGuest(userID);
    }, []);

    return (
        <>
            <PreviewOverlay />
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
