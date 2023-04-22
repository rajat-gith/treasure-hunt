import React from "react";
import "../../styles/StageStyle.css";
import { useTimer } from "react-timer-hook";
import { useDispatch } from "react-redux";
import { setStage } from "../../actions/stageActions";

function Stage7() {
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
      dispatch(setStage("FINALSTAGE"));
    },
  });
  return (
    <div className="Stage_7">
      <span className="stage_title">
        Have Patience !!! Here is the final clue to help you out to find the
        final answer.
      </span>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "40px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
      </div>
      <p>
        Green hero saves friend from deathly fall, Avengers saved, crisis
        forestalled.
      </p>
    </div>
  );
}

export default Stage7;
