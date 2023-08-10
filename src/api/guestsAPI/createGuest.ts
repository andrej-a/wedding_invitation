import axios from 'axios';

import { APIConstants } from '@/types/constants';
import { IGuest } from '@/types/IGuest';

const { URL, CREATE_GUEST } = APIConstants;

const createGuest = async (guest: Omit<IGuest, '_id'>): Promise<boolean> => {
    try {
        const res = axios.post(`${URL}${CREATE_GUEST}`, guest);
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
export default createGuest;
