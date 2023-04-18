import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ImageDetail from './ImageDetail';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TImageInfo } from '../../types';

const imageInfo = {
  id: '52801740703',
  description: {
    _content: '',
  },
  owner: {
    username: 'Giorgi Natsvlishvili',
    location: 'Tbilisi, Georgia',
  },
  title: {
    _content: 'aaa',
  },
  dates: {
    taken: 'aaa',
  },
  views: '12311',
  tags: {
    tag: [
      {
        id: '106844815-52801740703-1344',
        author: '106937628@N08',
        authorname: 'Giorgi Natsvlishvili',
        raw: 'cat',
        _content: 'cat',
        machine_tag: 0,
      },
    ],
  },
};

export type TDetailState = {
  isLoading: boolean;
  error: string;
  imageInfo: TImageInfo | null;
  imageUrl: string;
};

const initialState: TDetailState = {
  isLoading: true,
  error: '',
  imageInfo: imageInfo,
  imageUrl: '',
};

export const detail = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
});

const store = configureStore({
  reducer: {
    detail: detail.reducer,
  },
});

describe('ImageDetail', () => {
  it('ImageDetail test', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ImageDetail />
        </BrowserRouter>
      </Provider>
    );
    const iD = screen.queryByTestId('image-detail');
    expect(iD).toBeDefined();
  });
});
