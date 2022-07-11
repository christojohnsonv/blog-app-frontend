import React from 'react'
import './LeftSideBar.css'
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Tags from './searchBar';


function LeftSideBar() {
  return (
    <div className='leftSideBarMainContainer col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3'>      
    {/* <Tags/> */}
      <div className="searchBar d-flex">
        
      </div>
      <div class="eachCard col-sm-12">
          <div class="card d-flex">
            <div class="card-body">
            <input className='searchInput col-8' placeholder='#hashTags' type="text" />
            <button className='searchButton'>Search</button>
            </div>
          </div>
        </div>
      <div class="row cardContainer">
        <div class="eachCard col-sm-12">
          <div class="card">
            <div class="card-header">
              Categories
            </div>
            <div class="card-body">
            <button type="button" class="catButton btn btn-light">+</button>
            <button type="button" class="catButton btn btn-light">category one</button>
            <button type="button" class="catButton btn btn-light">a category</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>

            </div>
          </div>
        </div>
        <div class="eachCard col-sm-12">
          <div class="card">
            <div class="card-header">
             Sub Categories
            </div>
            <div class="card-body">
            <button type="button" class="catButton btn btn-light">+</button>
            <button type="button" class="catButton btn btn-light">category one</button>
            <button type="button" class="catButton btn btn-light">a category</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>
            <button type="button" class="catButton btn btn-light">Light</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar




    

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },

  { title: "Monty Python and the Holy Grail", year: 1975 }
];
