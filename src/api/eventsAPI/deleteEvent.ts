import axios, { AxiosResponse } from 'axios';

import { APIConstants } from '@/types/constants';

const { URL, DELETE_EVENT } = APIConstants;

const deleteEvent = async (_id: string): Promise<boolean> => {
    try {
        const res = axios.delete(`${URL}${DELETE_EVENT}`, { data: { _id } });
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
export default deleteEvent;
