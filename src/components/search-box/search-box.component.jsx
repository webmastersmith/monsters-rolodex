import React from 'react'

export const SearchBox = ({placeholder, handleChange, classes}) => (
    <input
    type="search"
    placeholder={placeholder}
    className='border border-black'
    onChange={handleChange}
  />
)