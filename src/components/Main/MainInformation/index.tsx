import React from 'react';

import {
    EventsDate,
    EventsDateContainer,
    MainInfoContainer,
    MainPeopleOnThisEventContainer,
    MainPeopleOnThisEventNames,
} from './styles';

const MainInfoComponent = () => {
    return (
        <MainInfoContainer>
            <MainPeopleOnThisEventContainer>
                <MainPeopleOnThisEventNames>
                    Павел и Анастасия
                </MainPeopleOnThisEventNames>
            </MainPeopleOnThisEventContainer>
            <EventsDateContainer>
                <EventsDate>30 СЕНТЯБРЯ 2023</EventsDate>
            </EventsDateContainer>
        </MainInfoContainer>
    );
};

export default MainInfoComponent;
