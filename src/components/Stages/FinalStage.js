import React, { useEffect, useState } from "react";
import "../../styles/StageStyle.css";
import { useNavigate } from "react-router-dom";
import { logout } from "../../firebaseconfig";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db, auth } from "../../firebaseconfig";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setScore } from "../../actions/ScoreAction";
import { setStage } from "../../actions/stageActions";

function FinalStage({ seconds, minutes, hours }) {
  const [uid, setUid] = useState("");
  const navigate = useNavigate();
  const [docId, setdocId] = useState("");
  const dispatch = useDispatch();

  const scoreInfo = useSelector((state) => state.currentScore);

  return (
    <div className="FinalStage">
      <span className="stage_title">Guess the Scene we are talking about</span>
      <div className="options">
        <button
          onClick={() => {
            dispatch(setScore("DECREMENT", 10));
            dispatch(setStage("RESULTSTAGE"));
          }}
        >
          Avengers vs HYDRA - Opening Battle Scene{" "}
        </button>
        <button
          onClick={() => {
            dispatch(setScore("INCREMENT", 50));
            dispatch(setStage("RESULTSTAGE"));
          }}
        >
          The iconic Six Avengers fighting in circular manner
        </button>
        <button
          onClick={() => {
            dispatch(setScore("DECREMENT", 10));
            dispatch(setStage("RESULTSTAGE"));
          }}
        >
          Avengers and ultron ship Fight
        </button>
      </div>
    </div>
  );
}

export default FinalStage;
