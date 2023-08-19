import axios from 'axios';

import { APIConstants, stringConstants } from '@/types/constants';
import { IGuest } from '@/types/IGuest';
import toast from 'react-hot-toast';

const { URL, CREATE_GUEST } = APIConstants;
const { SERVER_ERROR } = stringConstants;

const createGuest = async (guest: Omit<IGuest, '_id'>): Promise<boolean> => {
    try {
        const res = axios.post(`${URL}${CREATE_GUEST}`, guest);
        if ((await res).status === 201) {
            toast.success(`Success status: ${(await res).status}`);
            return true;
        }
        toast.error(`Error status: ${(await res).status}`);
        return false;
    } catch (error) {
        console.error(error);
        toast.error(SERVER_ERROR);
        return false;
    }
};
export default createGuest;
