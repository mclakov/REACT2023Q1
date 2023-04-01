import React from 'react';
import SearchBar from '../../UI/searchbar/SearchBar';
import Cards from '../../UI/cards/Cards';
import data from '../../assets/data/cardData.json';

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <SearchBar />
      <Cards cards={data.data} />
    </div>
  );
};

export default HomePage;
