import axios from 'axios';

import { APIConstants, stringConstants } from '@/types/constants';
import { IGuest } from '@/types/IGuest';
import toast from 'react-hot-toast';

const { URL, UPDATE_GUEST } = APIConstants;
const { SERVER_ERROR } = stringConstants;

const updateGuest = async (guest: IGuest): Promise<boolean> => {
    try {
        const res = axios.patch(`${URL}${UPDATE_GUEST}`, guest);
        if ((await res).status === 201) {
            toast.success('Данные успешно обновлены');
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
export default updateGuest;
