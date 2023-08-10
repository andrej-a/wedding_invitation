import { IGuest } from '@/types/IGuest';
import ITimingCard from '@/types/ITimingCard';
import { IDeleteItemFormProps } from '@/types/modalInterfaces';
import { TPayload } from '@/types/TPayload';
import { createSlice } from '@reduxjs/toolkit';

export interface IMainInitialState {
    isShowUserModalForm: boolean;
    isShowUpdateOrCreateModal: boolean;
    isShowUpdateOrCreateGuestModal: boolean;
    favouriteDrinks: string[];
    scrollToCoordinates: number;
    events: ITimingCard[];
    guests: IGuest[];
    currentDeletionItem: IDeleteItemFormProps;
}

export const initialState: IMainInitialState = {
    isShowUserModalForm: false,
    isShowUpdateOrCreateModal: false,
    isShowUpdateOrCreateGuestModal: false,
    favouriteDrinks: [],
    scrollToCoordinates: 0,
    events: [],
    guests: [],
    currentDeletionItem: {} as IDeleteItemFormProps,
};

const solutionSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        setShowUserModalForm: (state, { payload }: TPayload<boolean>) => {
            state.isShowUserModalForm = payload;
        },
        setShowUpdateOrCreateModal: (state, { payload }: TPayload<boolean>) => {
            state.isShowUpdateOrCreateModal = payload;
        },
        addFavouriteDrink: (state, { payload }: TPayload<string>) => {
            state.favouriteDrinks.push(payload);
        },
        removeFavouriteDrink: (state, { payload }: TPayload<string>) => {
            state.favouriteDrinks = state.favouriteDrinks.filter(
                drink => drink !== payload,
            );
        },
        setScrollToCoordinates: (state, { payload }: TPayload<number>) => {
            state.scrollToCoordinates = payload;
        },
        setEvents: (state, { payload }: TPayload<ITimingCard[]>) => {
            state.events = payload;
        },
        setGuests: (state, { payload }: TPayload<IGuest[]>) => {
            state.guests = payload;
        },
        setCurrentDeletionItem: (
            state,
            { payload }: TPayload<IDeleteItemFormProps>,
        ) => {
            state.currentDeletionItem = payload;
        },
        setShowUpdateOrCreateGuestModal: (
            store,
            { payload }: TPayload<boolean>,
        ) => {
            store.isShowUpdateOrCreateGuestModal = payload;
        },
    },
});

const { actions, reducer } = solutionSlice;
export const {
    setShowUserModalForm,
    addFavouriteDrink,
    removeFavouriteDrink,
    setScrollToCoordinates,
    setEvents,
    setShowUpdateOrCreateModal,
    setGuests,
    setCurrentDeletionItem,
    setShowUpdateOrCreateGuestModal,
} = actions;
export default reducer;
