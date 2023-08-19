import axios, { AxiosResponse } from 'axios';

import { APIConstants, stringConstants } from '@/types/constants';
import toast from 'react-hot-toast';
const { URL, DELETE_GUEST } = APIConstants;
const { SERVER_ERROR } = stringConstants;

const deleteGuest = async (_id: string): Promise<boolean> => {
    try {
        const res = axios.delete(`${URL}${DELETE_GUEST}`, { data: { _id } });
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
export default deleteGuest;
