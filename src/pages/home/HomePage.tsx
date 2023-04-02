import React, { useEffect, useRef, useState } from 'react';
import SearchBar from '../../UI/searchbar/SearchBar';
import Cards from '../../UI/cards/Cards';
import data from '../../assets/data/cardData.json';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const searchValueRef = useRef('');
  searchValueRef.current = searchValue;

  useEffect(() => {
    const localStorageValue = localStorage.getItem('searchValue');
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

  return (
    <div data-testid="home-page">
      <SearchBar searchValue={searchValue} onSearchBarChange={handleSearchBarChange} />
      <Cards cards={data.data} />
    </div>
  );
};

export default HomePage;
