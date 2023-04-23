import React, { useEffect, useState } from "react";
import "../../styles/StageStyle.css";
import { useTimer } from "react-timer-hook";
import { useDispatch } from "react-redux";
import { setStage } from "../../actions/stageActions";
import { setScore } from "../../actions/ScoreAction";
import { logout } from "../../firebaseconfig";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function Stage4() {
  const time = new Date();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
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
      handleOpen(true);
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop={true}
      >
        <Box className="modalBox">
          <h2>Guess which villian we are taliking about ??</h2>
          <div className="options">
            <Box
              onClick={() => {
                alert("You have reached a dead-end");
                dispatch(setScore("DECREMENT", 20));
                dispatch(setStage("RESULTSTAGE"));
              }}
              className="opt_1"
            >
              <p>Ultron</p>
            </Box>
            <Box
              onClick={() => {
                dispatch(setStage("STAGE5"));
                dispatch(setScore("INCREMENT", 100));
              }}
              className="opt_2"
            >
              <p>Loki</p>
            </Box>
            <Box
              onClick={() => {
                alert("You have reached a dead-end");
                dispatch(setScore("DECREMENT", 20));
                dispatch(setStage("RESULTSTAGE"));
              }}
              className="opt_3"
            >
              <p>The ultimate: Thanos</p>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Stage4;
