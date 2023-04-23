import React, { useState, useEffect } from "react";
import "../../styles/StageStyle.css";
import { puzzle } from "jigsaw-puzzle";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setStage } from "../../actions/stageActions";
import Timer from "../Timer";
import { setScore } from "../../actions/ScoreAction";
import { logout } from "../../firebaseconfig";
import { useNavigate } from "react-router-dom";

function Stage3(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scoreInfo = useSelector((state) => state.currentScore);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);
  useEffect(() => {
    setTimeout(() => {
      handleOpen(true);
    }, 10000);
  }, [dispatch]);
  return (
    <div className="Stage_3">
      <Timer expiryTimestamp={time} />
      <p>
        Out of many are present but we lost a gem. Quicksilver, the
        lightning-fast superhero with a sharp tongue and a tragic fate, is the
        result of this clue
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop={true}
      >
        <Box className="modalBox">
          <h2>Guess which movie we are talking about ??</h2>
          <div className="options">
            <Box
              onClick={() => {
                alert("You have reached a dead-end");
                dispatch(setScore("DECREMENT", 20));
                logout();
                navigate("/");
                alert("Your Assesment is Complete");
              }}
              className="opt_1"
            >
              <p>The Avengers</p>
            </Box>
            <Box
              onClick={() => {
                dispatch(setStage("STAGE4"));
                dispatch(setScore("INCREMENT", 100));
              }}
              className="opt_2"
            >
              <p>Avengers: The age of ultron</p>
            </Box>
            <Box
              onClick={() => {
                alert("You have reached a dead-end");
                dispatch(setScore("DECREMENT", 20));
                logout();
                navigate("/");
                alert("Your Assesment is Complete");
              }}
              className="opt_3"
            >
              <p>Avengers Infinity War</p>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Stage3;
