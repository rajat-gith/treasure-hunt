import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StageStyle.css";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db, auth, logout } from "../firebaseconfig";
import { useDispatch, useSelector } from "react-redux";
import { setScore } from "../actions/ScoreAction";

function ResultWindow({ seconds, minutes, hours }) {
  const [uid, setUid] = useState("");
  const navigate = useNavigate();
  const [docId, setdocId] = useState("");
  const dispatch = useDispatch();
  const scoreInfo = useSelector((state) => state.currentScore);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, get their UID
      const uid = user.uid;
      setUid(uid);
      // console.log(uid);
    } else {
      // User is signed out
      console.log("No user is signed in.");
    }
  });
  const fetchUserName = async () => {
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setdocId(doc.id);
    });
  };
  useEffect(() => {
    fetchUserName();
  });

  return (
    <div className="ResultStage">
      <p>Thank Your for taking the Test</p>
      <p>Your Assessment is successfully completed</p>
      <button
        onClick={() => {
          const docRef = doc(db, "users", docId);
          const data = {
            totaltime: [{ seconds }, { minutes }, { hours }],
            score: scoreInfo,
          };
          updateDoc(docRef, data)
            .then((docRef) => {
              console.log(
                "A New Document Field has been added to an existing document"
              );
              logout();
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Exit to Logout
      </button>
    </div>
  );
}

export default ResultWindow;
