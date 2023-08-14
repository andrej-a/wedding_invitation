import getGuestByID from '@/api/guestsAPI/getGuestByID';
import { useAppDispatch, useAppSelector } from './useStore';
import { setCurrentGuest } from '@/store/slices/main';
import { IGuest } from '@/types/IGuest';
import updateGuest from '@/api/guestsAPI/updateGuest';

const useGuests = () => {
    const { currentGuest } = useAppSelector(store => store.mainSlice);
    const dispatch = useAppDispatch();

    const getGuestByIDAndSetToState = () => {
        getGuestByID(currentGuest._id).then(guest => {
            dispatch(setCurrentGuest(guest as IGuest));
        });
    };

    const recognizeGuest = (userID: string | undefined) => {
        if (userID) {
            getGuestByID(userID).then(guest => {
                if (guest) {
                    dispatch(setCurrentGuest(guest as IGuest));
                    if (guest.status === 'not checked') {
                        updateGuest({ ...guest, status: 'checked' });
                    }
                } else {
                    alert('NO THIS GUEST');
                }
            });
        }
    };

    const refuseInvitation = () => {
        updateGuest({
            ...currentGuest,
            drinks: [],
            guests: '',
            status: 'canceled',
        });
        getGuestByIDAndSetToState();
    };

    const updateGuestAndSetItToStore = (data: IGuest) => {
        updateGuest(data);
        getGuestByIDAndSetToState();
    };

    return {
        getGuestByIDAndSetToState,
        recognizeGuest,
        refuseInvitation,
        updateGuestAndSetItToStore,
    };
};

export default useGuests;
