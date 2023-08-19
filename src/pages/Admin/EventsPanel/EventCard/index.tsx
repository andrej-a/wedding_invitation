import React, { memo } from 'react';

import ITimingCard from '@/types/ITimingCard';

import { TableContainer } from './styles';

const EventCardComponent = memo(
    ({ _id, time, eventDescription, event }: ITimingCard) => {
        return (
            <tr>
                <td>{time}</td>
                <td>{event}</td>
                <td>{eventDescription}</td>
                <td>Изменить</td>
                <td>Удалить</td>
            </tr>
        );
    },
);

export default EventCardComponent;
