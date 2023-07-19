import React, { useEffect, useState } from 'react';

import calculateTimeLeft from '@/utils/timer';

import { TimerComponent, TimerContainer } from './styles';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        timeLeft && (
            <TimerContainer>
                <TimerComponent>{timeLeft}</TimerComponent>
            </TimerContainer>
        )
    );
};

export default Timer;
