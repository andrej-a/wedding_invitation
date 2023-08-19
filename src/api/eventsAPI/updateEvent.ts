import axios from 'axios';

import { APIConstants, stringConstants } from '@/types/constants';
import ITimingCard from '@/types/ITimingCard';
import toast from 'react-hot-toast';

const { URL, UPDATE_EVENT } = APIConstants;
const { SERVER_ERROR } = stringConstants;

const uodateEvent = async (event: ITimingCard): Promise<boolean> => {
    try {
        const res = axios.patch(`${URL}${UPDATE_EVENT}`, event);
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
export default uodateEvent;
