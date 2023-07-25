import { TPayload } from '@/types/TPayload';
import { createSlice } from '@reduxjs/toolkit';

export interface IMainInitialState {
    isShowModal: boolean;
    favouriteDrinks: string[];
    scrollToCoordinates: number;
}

export const initialState: IMainInitialState = {
    isShowModal: false,
    favouriteDrinks: [],
    scrollToCoordinates: 0,
};

const solutionSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        setShowModal: (state, { payload }: TPayload<boolean>) => {
            state.isShowModal = payload;
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
    },
});

const { actions, reducer } = solutionSlice;
export const {
    setShowModal,
    addFavouriteDrink,
    removeFavouriteDrink,
    setScrollToCoordinates,
} = actions;
export default reducer;
