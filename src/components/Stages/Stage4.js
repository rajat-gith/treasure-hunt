import React, { useEffect } from "react";
import "../../styles/StageStyle.css";
import { useTimer } from "react-timer-hook";
import { useDispatch } from "react-redux";
import { setStage } from "../../actions/stageActions";

function Stage4() {
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
      dispatch(setStage("STAGE5"));
    },
  });

  return (
    <div className="Stage_4">
      <span className="stage_title">
        "Who knows this hint to guess the final answer is hidden in this clue.."
      </span>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "40px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
      </div>
      <p>
        They are called out for a reason to fight against one who is a nearer to
        godly creatures. A not so one-eyed man is there to bring them all.
      </p>
    </div>
  );
}

export default Stage4;
