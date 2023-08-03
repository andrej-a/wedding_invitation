import React, { memo, useRef } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import ITimingCard from '@/types/ITimingCard';

import {
    EventCardContainer,
    EventContainer,
    EventDescription,
    TextContainer,
    TimeContainer,
} from './styles';

const EventCard = memo(({ time, event, eventDescription }: ITimingCard) => {
    const eventCardRef = useRef<HTMLDivElement>(null);
    useIntersectionObserver([eventCardRef]);
    return (
        <EventCardContainer>
            <TextContainer>
                <TimeContainer>{time}</TimeContainer>
            </TextContainer>
            <TextContainer>
                <EventContainer>{event}</EventContainer>
            </TextContainer>
            <TextContainer>
                <EventDescription
                    style={{ opacity: 0, transition: 'all 2s ease' }}
                    ref={eventCardRef}
                >
                    {eventDescription}
                </EventDescription>
            </TextContainer>
        </EventCardContainer>
    );
});

export default EventCard;
