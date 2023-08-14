import axios from 'axios';

import { APIConstants } from '@/types/constants';
import { IGuest } from '@/types/IGuest';
import ITimingCard from '@/types/ITimingCard';

const { URL, UPDATE_GUEST } = APIConstants;

const updateGuest = async (guest: IGuest): Promise<boolean> => {
    try {
        const res = axios.patch(`${URL}${UPDATE_GUEST}`, guest);
        if ((await res).status === 201) {
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
export default updateGuest;
