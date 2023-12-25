import React, { useContext } from "react";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import LanguageIcon from "@mui/icons-material/Language";
import "./Navbar.scss";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Navbar = () => {
 
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SavedSearchIcon />
        </div>
        <div className="items">
        <h1><FaQuoteLeft /> MERN Driven  <span> Image Processing </span> Automation <FaQuoteRight /></h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
