import React, { useEffect, useRef } from 'react';
import Cards from '../../UI/cards/Cards';
import Spinner from '../../UI/spinner/Spinner';
import SearchBar from '../../UI/searchbar/SearchBar';
import { useAppSelector } from '../../hooks';

export const HomePage = () => {
  const { searchValue, images, error, isLoading } = useAppSelector((state) => state.search);

  const searchValueRef = useRef('');
  searchValueRef.current = searchValue;

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
