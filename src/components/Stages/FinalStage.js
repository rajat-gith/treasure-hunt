import React, { useEffect, useState } from "react";
import "../../styles/StageStyle.css";
import { useNavigate } from "react-router-dom";
import { logout } from "../../firebaseconfig";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db, auth } from "../../firebaseconfig";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function FinalStage({ seconds, minutes, hours }) {
  const [uid, setUid] = useState("");
  const navigate = useNavigate();
  const [docId, setdocId] = useState("");
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
  const handleClick = () => {
    const docRef = doc(db, "users", docId);
    updateDoc(docRef, { totaltime: [{ seconds }, { minutes }, { hours }] })
      .then((doc) => {
        console.log(
          "A New Document Field has been added to an existing document"
        );
        logout();
        navigate("/");
        alert("Your Assesment is Complete");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="FinalStage">
      <span className="stage_title">Guess the Scene we are talking about</span>
      <div className="options">
        <button>Avengers vs HYDRA - Opening Battle Scene </button>
        <button onClick={handleClick}>
          The iconic Six Avengers fighting in circular manner
        </button>
        <button>Avengers and ultron ship Fight</button>
      </div>
    </div>
  );
}

export default FinalStage;
