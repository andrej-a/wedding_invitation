import React, { memo } from 'react';

import ITimingCard from '@/types/ITimingCard';

import {
    EventCardContainer,
    EventContainer,
    EventDescription,
    TextContainer,
    TimeContainer,
} from './styles';

const EventCard = memo(({ time, event, eventDescription }: ITimingCard) => {
    return (
        <EventCardContainer>
            <TextContainer>
                <TimeContainer>{time}</TimeContainer>
            </TextContainer>
            <TextContainer>
                <EventContainer>{event}</EventContainer>
            </TextContainer>
            <TextContainer>
                <EventDescription>{eventDescription}</EventDescription>
            </TextContainer>
        </EventCardContainer>
    );
});

export default EventCard;
