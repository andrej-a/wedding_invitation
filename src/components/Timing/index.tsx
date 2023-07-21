import React, { useState } from 'react';

import { stringConstants } from '../types/constants';
import ITimingCard from '../types/ITimingCard';
import EventCard from './Card';
import eventsConfig from './config/config';
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
    const [events, setEvents] = useState<ITimingCard[]>(eventsConfig);
    return (
        <TimingContainer>
            <TimingTitleContainer>
                <TimingTitle>{TIMING_TITLE}</TimingTitle>
            </TimingTitleContainer>

            <TimingInfoContainer>
                {events.length > 0 ? (
                    events.map(({ id, time, event, eventDescription }) => {
                        return (
                            <EventCard
                                key={id}
                                id={id}
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
