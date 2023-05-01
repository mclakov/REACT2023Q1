import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TImage } from '../types';
import { fetchImages } from './thunks';

export enum SortType {
  InterestingDesc = 'interestingness-desc',
}

export type TSearchState = {
  searchValue: string;
  sortBy: SortType;
  resultsPerPage: number;
  currentPage: number;
  totalPages: number;
  minPageLimit: number;
  maxPageLimit: number;
  isLoading: boolean;
  error: string;
  images: TImage[];
  [key: string]: string | SortType | number | boolean | TImage[];
};

const initialState: TSearchState = {
  searchValue: '',
  sortBy: SortType.InterestingDesc,
  resultsPerPage: 30,
  currentPage: 1,
  totalPages: 0,
  minPageLimit: 0,
  maxPageLimit: 5,
  isLoading: true,
  error: '',
  images: [],
};

const pageNumberLimit = 5;

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSearchOptions: (
      state,
      action: PayloadAction<{
        name: string;
        value: string;
      }>
    ) => {
      state[action.payload.name] = action.payload.value;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPrevPage: (state) => {
      if ((state.currentPage - 1) % pageNumberLimit === 0) {
        state.maxPageLimit = state.maxPageLimit - pageNumberLimit;
        state.minPageLimit = state.minPageLimit - pageNumberLimit;
      }
      state.currentPage = state.currentPage - 1;
    },
    setNextPage: (state) => {
      if (state.currentPage + 1 > state.maxPageLimit) {
        state.maxPageLimit = state.maxPageLimit + pageNumberLimit;
        state.minPageLimit = state.minPageLimit + pageNumberLimit;
      }
      state.currentPage = state.currentPage + 1;
    },
    resetPage: (state) => {
      state.maxPageLimit = 5;
      state.minPageLimit = 0;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.images = action.payload.images;
      state.totalPages = action.payload.totalPages;
    });
    builder.addCase(fetchImages.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error occurred';
      state.images = [];
      state.totalPages = 0;
    });
  },
});

export const { setSearchValue, setCurrentPage, resetPage } = searchSlice.actions;

export default searchSlice.reducer;
