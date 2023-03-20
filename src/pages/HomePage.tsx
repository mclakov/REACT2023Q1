import React, { Component } from 'react';
import SearchBar from '../widgets/SearchBar';
import Cards from '../widgets/Cards';
import data from '../assets/data/cardData.json';

class HomePage extends Component {
  render() {
    return (
      <div data-testid="home-page">
        <SearchBar />
        <Cards cards={data.data} />
      </div>
    );
  }
}

export default HomePage;
