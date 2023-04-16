import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search';
import detailReducer from '../features/detail';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    detail: detailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
