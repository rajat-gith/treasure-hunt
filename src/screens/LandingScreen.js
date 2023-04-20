import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LandingScreenStyle.css";
import { auth, provider } from "../firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import Nav from "../components/Nav";


function LandingScreen() {
  const [value, setValue] = useState("");
  const [userName,setUserName]=useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("displayName", data.user.displayName);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
    setUserName(localStorage.getItem("displayName"))
    console.log(value);
    if (value) {
      navigate("/game");
    } else {
      navigate("");
    }
  });
  return (
    <div className="LandingScreen">
      <Nav/>
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
          <button onClick={handleClick}>Play Game</button>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;
