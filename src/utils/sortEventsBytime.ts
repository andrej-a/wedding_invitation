import ITimingCard from '@/types/ITimingCard';

const sortEventsByTime = (events: ITimingCard[]) =>
    events.sort((a, b) => (a.time > b.time ? 1 : -1));

export default sortEventsByTime;
