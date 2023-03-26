import React, { Component } from 'react';
import style from './UserCard.module.scss';

type TSearchBarProps = Record<string, never>;
type TSearchBarState = Record<string, string>;

class SearchBar extends Component<TSearchBarProps, TSearchBarState> {
  constructor(props: TSearchBarProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('value') || '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchValue: event.target.value });
  }

  componentDidMount() {
    const localStorageValue = localStorage.getItem('value');
    if (localStorageValue) {
      this.setState({ searchValue: localStorageValue });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('value', this.state.searchValue);
  }

  render() {
    return (
      <form className={style.searchbar}>
        <input
          type="text"
          className={style.searchbarInput}
          value={this.state.searchValue}
          onChange={this.handleChange}
          placeholder="Search"
        ></input>
        <button type="submit" className={style.searchbarBtn}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
