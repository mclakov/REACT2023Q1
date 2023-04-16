import React, { useEffect, useRef, useState } from 'react';
import { flickr } from '../../common/flickr';
import Cards from '../../UI/cards/Cards';
import Spinner from '../../UI/spinner/Spinner';
import SearchBar from '../../UI/searchbar/SearchBar';
import { TImage, TSearchImagesParams } from '../../types';
import { useAppSelector } from '../../hooks';
import { setSearchValue } from '../../features/search';

export const HomePage = () => {
  const { searchValue, images, error, isLoading } = useAppSelector((state) => state.search);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchValueRef.current as string);
    };
  }, []);

  const notFound = !error && !isLoading && images.length === 0 ? 'Nothing found' : null;

  return (
    <div data-testid="home-page">
      <SearchBar />
      {error && <div>{error}</div>}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Cards cards={images} />
        </>
      )}
      {notFound}
    </div>
  );
};

export default HomePage;
