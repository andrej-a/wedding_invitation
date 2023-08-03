import axios, { AxiosResponse } from 'axios';

import { APIConstants } from '@/types/constants';
import ITimingCard from '@/types/ITimingCard';
import sortEventsByTime from '@/utils/sortEventsBytime';

const { URL, GET_ALL_EVENTS } = APIConstants;

const getAllEvents = async (): Promise<ITimingCard[]> => {
    try {
        const response: AxiosResponse<any, any> = await axios.get(
            `${URL}${GET_ALL_EVENTS}`,
        );
        const events: ITimingCard[] = response.data.events;
        return sortEventsByTime(events);
    } catch (error) {
        console.error(error);
        return [];
    }
};
export default getAllEvents;
