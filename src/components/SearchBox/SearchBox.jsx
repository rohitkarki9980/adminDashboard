import React from 'react';
import './searchbox.css'
import { IoIosSearch } from "react-icons/io";
const SearchBox = () => {
  return (
    <>
      <div className="searchBox position-relative d-flex align-items-center m-4" >
      <IoIosSearch  className='m-2 search'/>
        <input type="text" placeholder='Search here...' />
        
      </div>
    </>
  );
}

export default SearchBox;
