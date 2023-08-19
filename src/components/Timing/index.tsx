import React, { useEffect, useState } from 'react';

import getAllEvents from '@/api/eventsAPI/getAllEvents';
import sortEventsByTime from '@/utils/sortEventsBytime';

import { stringConstants } from '../../types/constants';
import ITimingCard from '../../types/ITimingCard';
import EventCard from './Card';
import {
    NoEventsDescription,
    TextContainer,
    TimingContainer,
    TimingInfoContainer,
    TimingTitle,
    TimingTitleContainer,
} from './styles';

const { TIMING_TITLE, NO_EVENTS_DESCRIPTION } = stringConstants;
const Timing = () => {
    const [events, setEvents] = useState<ITimingCard[]>([]);

    useEffect(() => {
        getAllEvents().then(events => {
            setEvents(events);
        });
    }, []);

    return (
        <TimingContainer>
            <TimingTitleContainer>
                <TimingTitle>{TIMING_TITLE}</TimingTitle>
            </TimingTitleContainer>

            <TimingInfoContainer>
                {events.length > 0 ? (
                    events.map(({ _id, time, event, eventDescription }) => {
                        return (
                            <EventCard
                                key={_id}
                                _id={_id}
                                time={time}
                                event={event}
                                eventDescription={eventDescription}
                            />
                        );
                    })
                ) : (
                    <TextContainer>
                        <NoEventsDescription>
                            {NO_EVENTS_DESCRIPTION}
                        </NoEventsDescription>
                    </TextContainer>
                )}
            </TimingInfoContainer>
        </TimingContainer>
    );
};

export default Timing;
