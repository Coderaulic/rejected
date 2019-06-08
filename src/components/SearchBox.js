import React from 'react';

// SearchBox component. searchChange is function passed down from Rejected.js mapped via Redux store
const SearchBox = ({ searchChange }) => {
  return (
    <div className='searchBox pa4'>
      <input
        type='search'
        onChange={ searchChange }
        placeholder='Search by company name'
        className='search_bar pa3 ba b--black'
      />
    </div>
  );
}

export default SearchBox;
