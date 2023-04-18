import { createSlice } from '@reduxjs/toolkit';
import { TImageInfo } from '../types';
import { fetchImageData } from './thunks';

export type DetailState = {
  isLoading: boolean;
  error: string;
  imageInfo: TImageInfo | null;
  imageUrl: string;
};

const initialState: DetailState = {
  isLoading: true,
  error: '',
  imageInfo: null,
  imageUrl: '',
};

export const detail = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImageData.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchImageData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.imageInfo = action.payload.imageInfo;
      state.imageUrl = action.payload.imageUrl;
    });
    builder.addCase(fetchImageData.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error occurred';
      state.imageInfo = null;
      state.imageUrl = '';
    });
  },
});

export default detail.reducer;
