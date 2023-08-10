import axios, { AxiosResponse } from 'axios';

import { APIConstants } from '@/types/constants';
import { IGuest } from '@/types/IGuest';

const { URL, GET_ALL_GUESTS } = APIConstants;

const getAllGuests = async (): Promise<IGuest[]> => {
    try {
        const response: AxiosResponse<any, any> = await axios.get(
            `${URL}${GET_ALL_GUESTS}`,
        );
        console.log(response);

        const guests: IGuest[] = response.data.guest;
        return guests;
    } catch (error) {
        console.error(error);
        return [];
    }
};
export default getAllGuests;
