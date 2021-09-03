import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search">
        <div className="search-container">
          <form>
            <input type="text" placeholder="Search products" />
            <p>
              <input type="checkbox" />
              {''}
              Only show products in stoc
            </p>
            <input type="submit" name="submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBar;
