import React from 'react'

export const SearchBox = ({placeholder, handleChange}) => (
    <input
    type="search"
    placeholder={placeholder}
    className="border border-black"
    onChange={handleChange}
  />
)