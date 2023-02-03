import { ArrowDropDown, NotificationAdd, Search } from "@mui/icons-material";
import React, { useState } from "react";
import "./Navbar.scss";



const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false)
    window.onscroll=()=>{
        setScrolled(window.pageYOffset===0 ? false : true);
        return ()=>(window.onscroll= null)
    }
console.log(isScrolled)
  return (
    <div className={isScrolled ? "navbar scrolled": "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://icons.iconarchive.com/icons/chrisbanks2/cold-fusion-hd/128/netflix-icon.png"
            alt=""
          />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>My list</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <NotificationAdd className="icon" />
          <img
            src="https://icons.iconarchive.com/icons/chrisbanks2/cold-fusion-hd/128/netflix-icon.png"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
