import React from 'react'
import {FaSearch} from 'react-icons/fa'

export default function SearchBar() {
  return (
    <div className='search-bar search-bar__top-search'>
        <input className='search-bar__input' placeholder='Search for...' type="text" />
        <div className="search-icon">
            <FaSearch size={10} />
        </div>
    </div>
  )
}
