import { createAsyncThunk } from '@reduxjs/toolkit';
import { flickr } from '../common/flickr';
import { TSearchImagesParams, TImage, TSearchInfoParams, TImageSize } from '../types';

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
