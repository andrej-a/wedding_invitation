import axios, { AxiosResponse } from 'axios';

import { APIConstants } from '@/types/constants';
import ITimingCard from '@/types/ITimingCard';

const { URL, CREATE_EVENT } = APIConstants;

const createEvent = async (
    event: Omit<ITimingCard, '_id'>,
): Promise<boolean> => {
    try {
        const res = axios.post(`${URL}${CREATE_EVENT}`, event);
        if ((await res).status === 201) {
            alert(`Success status: ${(await res).status}`);
            return true;
        }
        alert(`Error status: ${(await res).status}`);
        return false;
    } catch (error) {
        console.error(error);
        alert('Возникла ошибка');
        return false;
    }
};
export default createEvent;
