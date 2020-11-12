import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-icon"
          src="http://coloradopeakpolitics.com/wp-content/uploads/2015/01/airbnb-logo.jpg"
          alt="img"
        />
      </Link>
      <div className="header-center">
        <input type="text" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>

      <div className="header-right">
        <p>Become a host</p>
        <IconButton>
          <LanguageIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>

        <Avatar />
      </div>
    </div>
  );
}

export default Header;
