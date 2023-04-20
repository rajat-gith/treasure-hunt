import React, { useState, useEffect } from "react";
import Puzzle from "react-image-puzzle";
import "../../styles/StageStyle.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Timer from "../Timer";
import { useDispatch, useSelector } from "react-redux";
import { setStage } from "../../actions/stageActions";

function Stage2() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.currentStage);
  const handleClose = () => setOpen(false);

  const changeState = () => {
    dispatch(setStage("Stage3"));
    handleClose();
    console.log("Clicked")
  };
  useEffect(() => {
    setTimeout(() => {
      setOpen("true");
    }, 10000);
    changeState();
  }, [dispatch]);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  return (
    <div className="Stage_2">
      <Timer expiryTimestamp={time} />
      <Puzzle
        className="PuzzleDiv"
        image="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892282/EducationHub/photos/isaac-newton-kneller-painting.jpg"
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalBox">
          <h2>Choose the Correct Movie</h2>
          <div className="options">
            <Box className="opt_1">
              <p>The Avengers</p>
            </Box>
            <Box onClick={changeState} className="opt_2">
              <p>Avengers EndGame</p>
            </Box>
            <Box className="opt_3">
              <p>Avengers Infinity War</p>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Stage2;
