import React, { useState, useEffect } from "react";
import Puzzle from "react-image-puzzle";
import "../../styles/StageStyle.css";
import { useTimer } from "react-timer-hook";
import Timer from "../Timer";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { setStage } from "../../actions/stageActions";
import { useDispatch, useSelector } from "react-redux";

function Stage1() {
  const dispatch = useDispatch();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setStage("STAGE2"));
    }, 10000);
  }, [dispatch]);

  return (
    <div className="Stage_1">
      <Timer expiryTimestamp={time} />
      <p>
        A group of superheroes with unique abilities must unite to prevent a
        powerful alien from collecting one of six artifacts that would grant him
        godlike powers to open the doors for his success.
      </p>
    </div>
  );
}

export default Stage1;
