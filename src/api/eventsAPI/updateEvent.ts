import axios, { AxiosResponse } from 'axios';

import { APIConstants } from '@/types/constants';
import ITimingCard from '@/types/ITimingCard';

const { URL, UPDATE_EVENT } = APIConstants;

const uodateEvent = async (event: ITimingCard): Promise<boolean> => {
    try {
        const res = axios.patch(`${URL}${UPDATE_EVENT}`, event);
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
export default uodateEvent;
