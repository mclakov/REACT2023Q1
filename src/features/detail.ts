import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { flickr } from '../common/flickr';
import { TImageInfo, TSearchInfoParams, TImageSize } from '../types';

export type TDetailState = {
  isLoading: boolean;
  error: string;
  imageInfo: TImageInfo | null;
  imageUrl: string;
};

const initialState: TDetailState = {
  isLoading: true,
  error: '',
  imageInfo: null,
  imageUrl: '',
};

export const fetchImageData = createAsyncThunk(
  'detail/fetchImageData',
  async (currentImageId: string, { rejectWithValue }) => {
    const params: TSearchInfoParams = {
      photo_id: currentImageId,
    };

    try {
      const fetchedImageInfo = await flickr('photos.getInfo', params);
      const imageInfo = fetchedImageInfo.photo;
      const fetchedImageSizes = await flickr('photos.getSizes', params);
      const sizes = fetchedImageSizes.sizes.size;
      const imageUrl = sizes
        .reverse()
        .filter((s: TImageSize) => s.label === 'Small' || s.label === 'Large')[0].source;

      return { imageInfo, imageUrl };
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);

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
