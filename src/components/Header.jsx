import React from "react";
import "../css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
      
          <img
            src="https://pngimg.com/uploads/netflix/netflix_PNG32.png"
            alt="brand logo"
          />
         
      </Link>
        
      
      <div className="header__search">
        <div className="header__search__input">
          <input type="text" name="" id="" placeholder="search movies here" />

          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
