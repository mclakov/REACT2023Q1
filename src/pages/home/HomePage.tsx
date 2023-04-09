import React, { useEffect, useState } from 'react';
import { flickr } from '../../common/flickr';
import Cards from '../../UI/cards/Cards';
import Spinner from '../../UI/spinner/Spinner';
import SearchBar from '../../UI/searchbar/SearchBar';
import { TImage, TSearchImagesParams } from '../../types';

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<TImage[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchImages = async (searchValue: string) => {
    setIsLoading(true);
    const params: TSearchImagesParams = {
      tags: searchValue,
      extras: 'url_n,owner_name,date_taken,views',
      page: '1',
      sort: 'interestingness-desc',
      per_page: '100',
    };

    try {
      const fetchedImages = await flickr('photos.search', params);
      setImages(fetchedImages.photos.photo.filter((item: TImage) => item.url_n));
      setError(null);
    } catch (err) {
      setImages([]);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const localStorageValue = localStorage.getItem('searchValue');
    if (localStorageValue) {
      setSearchValue(localStorageValue);
      fetchImages(localStorageValue);
    } else {
      fetchImages('nature,flowers');
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchValue);
    };
  }, [searchValue]);

  const handleSearchBarChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchBarSubmit = () => {
    fetchImages(searchValue);
  };

  const notFound = !error && !isLoading && images.length === 0 ? 'Nothing found' : null;

  return (
    <div data-testid="home-page">
      <SearchBar
        searchValue={searchValue}
        onSearchBarChange={handleSearchBarChange}
        onSearchBarSubmit={handleSearchBarSubmit}
      />
      {error && <div>Error occurred</div>}
      {isLoading ? <Spinner /> : <Cards cards={images} />}
      {notFound}
    </div>
  );
};

export default HomePage;
