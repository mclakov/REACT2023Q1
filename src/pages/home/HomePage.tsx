import React, { useEffect, useRef, useState } from 'react';
import SearchBar from '../../UI/searchbar/SearchBar';
import Cards from '../../UI/cards/Cards';
import { stringify } from 'querystring';
import { TImage, TSearchParams } from '../../types';

const HomePage = () => {
  const API_KEY = '432a4d95ad5ea34f1b057c492bbfdc47';

  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const searchValueRef = useRef('');
  searchValueRef.current = searchValue;

  useEffect(() => {
    const localStorageValue = localStorage.getItem('searchValue');
    fetchImages();
    if (localStorageValue) {
      setSearchValue(localStorageValue);
    }
    return () => {
      localStorage.setItem('searchValue', searchValueRef.current as string);
    };
  }, []);

  const handleSearchBarChange = (value: string) => {
    setSearchValue(value);
  };

  async function fetchImages() {
    const url = new URL('https://www.flickr.com/services/rest');

    const params: TSearchParams = {
      method: 'flickr.photos.getRecent',
      api_key: API_KEY,
      tags: searchValue,
      extras: 'url_n,owner_name,date_taken,views',
      page: '1',
      format: 'json',
      nojsoncallback: '1',
      sort: 'interestingness-desc',
      per_page: '50',
    };
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    const response = await fetch(url.href);
    let fetchedImages = await response.json();

    fetchedImages = fetchedImages.photos.photo.filter((item: TImage) => item.url_n);
    console.log('fetchedImages', fetchedImages);
    setImages(fetchedImages);
  }

  return (
    <div data-testid="home-page">
      <SearchBar searchValue={searchValue} onSearchBarChange={handleSearchBarChange} />
      <Cards cards={images} />
    </div>
  );
};

export default HomePage;
