import React, { Component } from 'react';

type SearchBarProps = Record<string, never>;

type SearchBarState = Record<string, string>;

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ searchValue: event.target.value });
  }

  componentDidMount() {
    const localStorageValue = localStorage.getItem('searchValue');
    if (localStorageValue) {
      this.setState({ searchValue: localStorageValue });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  render() {
    return (
      <form>
        <input
          type='text'
          value={this.state.searchValue}
          onChange={this.handleChange}
          placeholder='Search'
        ></input>
        <button type='submit'>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
