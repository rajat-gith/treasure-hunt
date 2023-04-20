import React, { useState } from "react";
import "../styles/NavStyle.css";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  const [showNavbar, setshowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setshowNavbar(!showNavbar);
  };
  return (
    <div className="Nav">
      <nav className={`navlinks  ${showNavbar && "active"}`}>
        <p>Home</p>
        <p>About</p>
        <p>Rules</p>
      </nav>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <MenuIcon sx={{ color: "brown" }} />
      </div>
    </div>
  );
}

export default Nav;
