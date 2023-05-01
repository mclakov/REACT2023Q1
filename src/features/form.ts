import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUserCardModel } from '../types';

export type FormState = {
  formValues: TUserCardModel[];
};

const initialState: FormState = {
  formValues: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TUserCardModel>) => {
      state.formValues.push(action.payload);
    },
  },
});

export const { addUser } = formSlice.actions;

export default formSlice.reducer;
