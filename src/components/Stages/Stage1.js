import React, { useState, useEffect } from "react";
import "../../styles/StageStyle.css";
import Timer from "../Timer";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { setStage } from "../../actions/stageActions";
import { useDispatch, useSelector } from "react-redux";
import { useTimer } from "react-timer-hook";

function Stage1() {
  const dispatch = useDispatch();
  const time = new Date();
  const expiryTimestamp = time.setSeconds(time.getSeconds() + 10);
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => dispatch(setStage("STAGE2")),
  });

  return (
    <div className="Stage_1">
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "40px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
      </div>
      <p>
        A group of superheroes with unique abilities must unite to prevent a
        powerful alien and army of drones from trying out to wipe out humanity,
        but it's not the for the last time.
      </p>
    </div>
  );
}

export default Stage1;
