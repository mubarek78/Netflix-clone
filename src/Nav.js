
import React, { useState, useEffect } from "react";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./Nav.css";



function Nav() {
  const [show, handleShow] = useState(false);
  const [showOpt, setShowopt] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
    <div className="left">
      <img
           className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
      <div className="left_menu">
       <span>Homepage</span>
       <span>Series</span>
       <span>Movies</span>
       <span>New and Popular</span>
       <span>My List</span>
       </div>
      </div>
      <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon dropdown" 
              onMouseEnter={() => setShowopt(!showOpt)}
              onMouseLeave={() => setShowopt(!showOpt)}
            />
            <div   className={`hideoptions ${showOpt && "options"}`}>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Nav;