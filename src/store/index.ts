import { combineReducers, configureStore } from '@reduxjs/toolkit';

import mainSlice from './slices/main';

const rootReducer = combineReducers({ mainSlice });

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
