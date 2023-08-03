import { v4 as uuidv4 } from 'uuid';

import ITimingCard from '@/types/ITimingCard';

const eventsConfig: ITimingCard[] = [
    {
        _id: uuidv4(),
        time: '15:00',
        event: 'Сбор гостей',
        eventDescription:
            'Время пролетит незаметно за игристым и общением с другими гостями',
    },
    {
        _id: uuidv4(),
        time: '15:30',
        event: 'Церемония',
        eventDescription:
            'Вы станете свидетелями создания новой семьи — нашей семьи',
    },
    {
        _id: uuidv4(),
        time: '16:00',
        event: 'Ужин',
        eventDescription:
            'Будет много танцев, веселья, поздравлений и, конечно, любви',
    },
    {
        _id: uuidv4(),
        time: '23:00',
        event: 'Завершение',
        eventDescription:
            'Мы будем благодарны каждому за счастливые моменты этого дня',
    },
];

export default eventsConfig;
