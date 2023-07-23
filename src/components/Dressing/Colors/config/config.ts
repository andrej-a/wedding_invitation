import { v4 as uuidv4 } from 'uuid';

import IColor from '@/components/types/IColor';

const config: IColor[] = [
    { id: uuidv4(), title: '#f8ced0' },
    { id: uuidv4(), title: '#f6dcc6' },
    { id: uuidv4(), title: '#ded2e0' },
    { id: uuidv4(), title: '#a7d1c0' },
    { id: uuidv4(), title: '#9dc6dc' },
    { id: uuidv4(), title: '#91a7cf' },
];

export default config;
