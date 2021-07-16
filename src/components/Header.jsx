import React, { useState } from "react";
import "../css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import {searchMovie} from "../actions/actions";
import { useDispatch } from "react-redux"; 

//search api for movie : https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=luca
function Header() {
  const [movieName, setMovie] = useState("");
  
  const dispatch = useDispatch();
  
  const submitMovie = (e) =>{
    e.preventDefault();
    console.log(movieName);
    dispatch(searchMovie(movieName));
  }

   
  //useEffect(() => {}, []);
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img
          src="https://pngimg.com/uploads/netflix/netflix_PNG32.png"
          alt="brand logo"
        />
      </Link>

      <div className="header__search">
      <form action="" onSubmit={submitMovie}>
        <div className="header__search__input">
        
            <input
              type="text"
              onChange={(e) => setMovie(e.target.value)}
              value={movieName}
              name=""
              id=""
              placeholder="search movies here"
            />
            <button type="submit" className="header__searchButton">
              <SearchIcon />
            </button>
          
        </div>
        </form>
      </div>
    </div>
  );
}

export default Header;
