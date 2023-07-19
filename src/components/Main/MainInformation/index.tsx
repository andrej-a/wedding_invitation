import React from 'react';

import { stringConstants } from '@/components/types/constants';

import {
    EventsDate,
    EventsDateContainer,
    MainInfoContainer,
    MainPeopleOnThisEventContainer,
    MainPeopleOnThisEventNames,
} from './styles';
import Timer from './Timer';

const { NEWLYWEDS, STRING_WEDDING_DATE } = stringConstants;

const MainInfoComponent = () => {
    return (
        <MainInfoContainer>
            <MainPeopleOnThisEventContainer>
                <MainPeopleOnThisEventNames>
                    {NEWLYWEDS}
                </MainPeopleOnThisEventNames>
            </MainPeopleOnThisEventContainer>
            <EventsDateContainer>
                <EventsDate>{STRING_WEDDING_DATE}</EventsDate>
            </EventsDateContainer>
            <Timer />
        </MainInfoContainer>
    );
};

export default MainInfoComponent;
