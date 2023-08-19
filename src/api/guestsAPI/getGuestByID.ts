import axios, { AxiosResponse } from 'axios';

import { APIConstants } from '@/types/constants';
import { IGuest } from '@/types/IGuest';

const { URL, GET_GUEST_BY_ID } = APIConstants;

const getGuestByID = async (_id: string): Promise<IGuest | undefined> => {
    try {
        const response: AxiosResponse<any, any> = await axios.get(
            `${URL}${GET_GUEST_BY_ID}?_id=${_id}`,
        );
        if ((await response).status === 200) {
            const guests: IGuest = response.data.guest;
            return guests;
        }
    } catch (error) {
        console.error(error);
        return undefined;
    }
};
export default getGuestByID;
