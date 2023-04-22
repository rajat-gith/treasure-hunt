import React from "react";
import { useTimer } from "react-timer-hook";
import { useDispatch } from "react-redux";
import { setStage } from "../../actions/stageActions";
import "../../styles/StageStyle.css";

function Stage6() {
  const time = new Date();
  const dispatch = useDispatch();
  const expiryTimestamp = time.setSeconds(time.getSeconds() + 9);
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
    onExpire: () => {
      dispatch(setStage("STAGE7"));
    },
  });
  return (
    <div className="Stage_6">
      <span className="stage_title">
        "Clues are less but enough to give you a hint to guess the answer. Well
        here is another hint."
      </span>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "40px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
      </div>
      <p>
        When darkness looms, heroes unite to defeat it. And this time, a lone
        figure brings an end to a significant chapter
      </p>
    </div>
  );
}

export default Stage6;
