import React, { Component } from 'react';

type TSearchBarProps = Record<string, never>;
type TSearchBarState = Record<string, string>;

class SearchBar extends Component<TSearchBarProps, TSearchBarState> {
  constructor(props: TSearchBarProps) {
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
      <form>
        <input
          type="text"
          value={this.state.searchValue}
          onChange={this.handleChange}
          placeholder="Search"
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
