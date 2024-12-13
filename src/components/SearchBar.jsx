import React from 'react'

export default function SearchBar(props) {
    
  return (
    <div className="search-bar">
        <span>
        <input type="text" onChange={(e)=>{props.updateSearchText(e)}}/>
        <button onClick={props.handleSearch}>Search</button>
        </span>
    </div>
  )
}
