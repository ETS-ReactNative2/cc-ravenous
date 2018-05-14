import React from 'react';
import './SearchBar.css';

//Interacts with Yelp API
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};


//Main Component: SearchBar
class SearchBar extends React.Component  {
  //Dynamically create list items using sortByOptions{}
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption =>
      {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li key={sortByOptionValue}>{sortByOption}</li>
      });
  };
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let{"'"}s Go</a>
        </div>
      </div>
    );
  };
};

export default SearchBar;
