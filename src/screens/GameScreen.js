import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import "../styles/GameScreenStyle.css";
import Box from "@mui/material/Box";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import Stage1 from "../components/Stages/Stage1";
import Stage2 from "../components/Stages/Stage2";
import Stage3 from "../components/Stages/Stage3";
import Stage4 from "../components/Stages/Stage4";
import Stage5 from "../components/Stages/Stage5";
import Stage6 from "../components/Stages/Stage6";
import Stage7 from "../components/Stages/Stage7";
import FinalStage from "../components/Stages/FinalStage";
import { useDispatch, useSelector } from "react-redux";
import { setStage } from "../actions/stageActions";
import { logout, auth, db } from "../firebaseconfig";
import { useNavigate } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useStopwatch } from "react-timer-hook";

function GameScreen() {
  const [open, setOpen] = useState(true);
  const [imgUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [active, setActive] = useState("Stage1");
  const [accuracy, setAccuracy] = useState("0.00");
  const [score, setScore] = useState("0.00");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  const currentStage = useSelector((state) => state.currentStage);
  const { stage } = currentStage;

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    setActive(stage);
    console.log("active");
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [stage, user, loading]);

  return (
    <div className="GameScreen">
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "40px" }}>
          <span>Time Taken: </span>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
      <div className="tracker">
        {active == "Stage1" ? (
          <img
            className="Active"
            src="https://i.imgur.com/BR4bxzr.png"
            alt=""
          />
        ) : (
          <img
            className="InActive"
            src="https://i.imgur.com/BR4bxzr.png"
            alt=""
          />
        )}

        {active == "Stage2" ? (
          <img
            className="Active"
            src="https://i.imgur.com/hFIO77U.png"
            alt=""
          />
        ) : (
          <img
            className="InActive"
            src="https://i.imgur.com/hFIO77U.png"
            alt=""
          />
        )}

        {active == "Stage3" ? (
          <img
            className="Active"
            src="https://i.imgur.com/WLCM1fK.png"
            alt=""
          />
        ) : (
          <img
            className="InActive"
            src="https://i.imgur.com/WLCM1fK.png"
            alt=""
          />
        )}

        {active == "Stage4" ? (
          <img
            className="Active"
            src="https://i.imgur.com/xzbsDiN.png"
            alt=""
          />
        ) : (
          <img
            className="InActive"
            src="https://i.imgur.com/xzbsDiN.png"
            alt=""
          />
        )}

        {active == "Stage5" ? (
          <img
            className="Active"
            src="https://i.imgur.com/nZlxhYd.png"
            alt=""
          />
        ) : (
          <img
            className="InActive"
            src="https://i.imgur.com/nZlxhYd.png"
            alt=""
          />
        )}

        {active == "Stage6" ? (
          <img
            className="Active"
            src="https://i.imgur.com/6oS3G6M.png"
            alt=""
          />
        ) : (
          <img
            className="InActive"
            src="https://i.imgur.com/6oS3G6M.png"
            alt=""
          />
        )}

        {active == "Stage7" ? (
          <img
            className="Active"
            src="https://i.imgur.com/Co8QQYU.png"
            alt=""
          />
        ) : (
          <img
            className="InActive"
            src="https://i.imgur.com/Co8QQYU.png"
            alt=""
          />
        )}
        {active == "FinalStage" ? (
          <img
            className="Active"
            src="https://i.imgur.com/yxgCXO8.jpg"
            alt=""
          />
        ) : (
          <img
            className="InActive"
            src="https://i.imgur.com/yxgCXO8.jpg"
            alt=""
          />
        )}
      </div>
      <div className="score_board">
        <p>Hello {name}</p>

        <p>Score:{score}</p>
        {/* <p>Accuracy:{accuracy}</p> */}
        <button onClick={logout}>Logout</button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalBox">
          <h1> Instructions</h1>
          <p> The game has different stages.</p>
          <p> At each stage you will face a new challenge.</p>
          <p>
            You will be judged based on the time taken to complete the task.
          </p>
          <p>The longer the time taken, the lower the accuracy tends to be.</p>
          <p>
            The greater your level of accuracy, the higher the number of points
            you will earn.
          </p>
          <button onClick={handleClose}>Ok</button>
        </Box>
      </Modal>

      {open ? null : (
        <div className="stages">
          {active == "Stage1" ? (
            <div className="stage_1">
              <Stage1 />
            </div>
          ) : null}
          {active == "Stage2" ? (
            <div className="stage_2">
              <Stage2 />
              {/* <button>Next</button> */}
            </div>
          ) : null}

          {active == "Stage3" ? (
            <div className="stage_3">
              <Stage3 />
              {/* <button>Next</button> */}
            </div>
          ) : null}
          {active == "Stage4" ? (
            <div className="stage_4">
              <Stage4 />
              {/* <button>Next</button> */}
            </div>
          ) : null}
          {active == "Stage5" ? (
            <div className="stage_5">
              <Stage5 />
              {/* <button>Next</button> */}
            </div>
          ) : null}
          {active == "Stage6" ? (
            <div className="stage_6">
              <Stage6 />
              {/* <button>Next</button> */}
            </div>
          ) : null}
          {active == "Stage7" ? (
            <div className="stage_7">
              <Stage7 />
              {/* <button>Next</button> */}
            </div>
          ) : null}
          {active == "FinalStage" ? (
            <div className="stage_Final">
              <FinalStage seconds={seconds} minutes={minutes} hours={hours} />
              {/* <button>Next</button> */}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default GameScreen;
