import { stringConstants } from '@/types/constants';

const { WEDDING_DATE } = stringConstants;

interface ITimeLeft {
    days: number | string;
    hours: number | string;
    minutes: number | string;
    seconds: number | string;
}

function calculateTimeLeft() {
    const difference = +new Date(WEDDING_DATE) - +new Date();

    let timeLeft: ITimeLeft = {} as ITimeLeft;

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    let { days, hours, minutes, seconds } = timeLeft;

    days = +days >= 10 ? days : `0${days}`;
    hours = +hours >= 10 ? hours : `0${hours}`;
    minutes = +minutes >= 10 ? minutes : `0${minutes}`;
    seconds = +seconds >= 10 ? seconds : `0${seconds}`;

    return difference > 0 ? `${days} : ${hours} : ${minutes} : ${seconds}` : '';
}

export default calculateTimeLeft;
