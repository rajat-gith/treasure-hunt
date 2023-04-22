import React, { useState } from "react";
import "../styles/NavStyle.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Nav() {
  const [showNavbar, setshowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setshowNavbar(!showNavbar);
  };
  return (
    <div className="Nav">
      <nav className={`navlinks  ${showNavbar && "active"}`}>
        <p>Home</p>
        <p>Rules</p>
        <Link to="/admin/login">
          <p>Admin</p>
        </Link>
      </nav>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <MenuIcon sx={{ color: "brown" }} />
      </div>
    </div>
  );
}

export default Nav;
