import ITimingCard from '@/types/ITimingCard';
import { TPayload } from '@/types/TPayload';
import { createSlice } from '@reduxjs/toolkit';

export interface IMainInitialState {
    isShowModal: boolean;
    isShowUpdateOrCreateModal: boolean;
    favouriteDrinks: string[];
    scrollToCoordinates: number;
    events: ITimingCard[];
}

export const initialState: IMainInitialState = {
    isShowModal: false,
    isShowUpdateOrCreateModal: false,
    favouriteDrinks: [],
    scrollToCoordinates: 0,
    events: [],
};

const solutionSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        setShowModal: (state, { payload }: TPayload<boolean>) => {
            state.isShowModal = payload;
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
    },
});

const { actions, reducer } = solutionSlice;
export const {
    setShowModal,
    addFavouriteDrink,
    removeFavouriteDrink,
    setScrollToCoordinates,
    setEvents,
    setShowUpdateOrCreateModal,
} = actions;
export default reducer;
