import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LandingScreenStyle.css";

import Nav from "../components/Nav";

function LandingScreen() {

  const navigate = useNavigate();
  

  useEffect(() => {
    // setValue(localStorage.getItem("email"));
    // setUserName(localStorage.getItem("displayName"));
    // console.log(value);
    // if (value) {
    //   navigate("/game");
    // } else {
    //   navigate("");
    // }
  });
  return (
    <div className="LandingScreen">
      <Nav />
      <div className="landingScreenContent">
        <p className="title">Treasure Hunt</p>
        <div className="landing_image">
          <img src="https://i.imgur.com/c2EUFLR.png" alt="" />
        </div>

        <div className="landing_writeup">
          <p className="description">
            Join the ultimate adventure and uncover hidden treasures in our
            online treasure hunt game!Solve challenging puzzles and explore new
            worlds in this thrilling, immersive experience.
          </p>
          <Link to="/player/register">
            <button className="PlayButton">Play Game</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
