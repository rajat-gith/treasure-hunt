import React, { useEffect, useState } from "react";
import Puzzle from "react-image-puzzle";
import "../../styles/StageStyle.css";
import { db, auth } from "../../firebaseconfig";
import { useStopwatch } from "react-timer-hook";
import { setStage } from "../../actions/stageActions";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { query, collection, getDocs, where } from "firebase/firestore";

function Stage2() {
  const { seconds, minutes, hours, days, start, pause, reset } = useStopwatch({
    autoStart: true,
  });
  const dispatch = useDispatch();
  const [timeSec, setSeconds] = useState(0);
  const [uid, setUid] = useState("");
  const time = new Date();
  const [docId, setdocId] = useState("");
  time.setSeconds(time.getSeconds() + 10);

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
    <div className="Stage_2">
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "30px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
      </div>
      <Puzzle
        className="PuzzleDiv"
        onDone={() => {
          const docRef = doc(db, "users", docId);
          updateDoc(docRef, {
            puzzletime: [{ seconds }, { minutes }, { hours }],
          })
            .then((docRef) => {
              console.log(
                "A New Document Field has been added to an existing document"
              );
              dispatch(setStage("STAGE3"));
            })
            .catch((error) => {
              console.log(error);
            });
        }}
        image="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892282/EducationHub/photos/isaac-newton-kneller-painting.jpg"
      />
    </div>
  );
}

export default Stage2;
