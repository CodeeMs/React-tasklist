import React from 'react';

const SearchInput = (props) => {
    return (
        <input {...props} type='text' className='search__input' placeholder='Search by title'/>
    );
};

export default SearchInput;