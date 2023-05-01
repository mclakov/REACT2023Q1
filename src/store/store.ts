import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search';
import detailReducer from '../features/detail';
import formReducer from '../features/form';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    detail: detailReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

declare global {
  interface Window {
    __PRELOADED_STATE__: RootState;
  }
}
