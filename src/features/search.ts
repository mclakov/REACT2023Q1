import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { flickr } from '../common/flickr';
import { TImage, TSearchImagesParams, TUserCardModel } from '../types';

export enum SortType {
  DatePostedDesc = 'date-posted-desc',
  DatePostedAsc = 'date-posted-asc',
  InterestingDesc = 'interestingness-desc',
  InterestingAsc = 'interestingness-asc',
  Relevance = 'relevance',
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
  formValues: TUserCardModel[];
  [key: string]: string | SortType | number | boolean | TImage[] | TUserCardModel[];
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
  formValues: [],
};

const pageNumberLimit = 5;

type SearchOptions = {
  searchValue: string;
  sortBy: string;
  resultsPerPage: number;
  currentPage: number;
};
export const fetchImages = createAsyncThunk(
  'search/fetchImages',
  async (searchOptions: SearchOptions, { rejectWithValue }) => {
    const { searchValue, sortBy, resultsPerPage, currentPage } = searchOptions;
    const params: TSearchImagesParams = {
      tags: searchValue,
      extras: 'url_n,owner_name,date_taken,views',
      page: currentPage.toString(),
      sort: sortBy,
      per_page: resultsPerPage.toString(),
    };

    try {
      const response = await flickr('photos.search', params);
      const totalPages = response.photos.pages;
      const images = response.photos.photo.filter((item: TImage) => item.url_n);
      return { images, totalPages };
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);

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
    builder.addCase(fetchImages.rejected, (state, action) => {
      state.isLoading = false;
      state.error = 'Error occurred';
      state.images = [];
      state.totalPages = 0;
    });
  },
});

export const {
  setSearchValue,
  setSearchOptions,
  setCurrentPage,
  setPrevPage,
  setNextPage,
  resetPage,
} = searchSlice.actions;

export default searchSlice.reducer;
