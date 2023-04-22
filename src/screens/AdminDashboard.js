import React, { useEffect, useState } from "react";
import { db } from "../firebaseconfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import "../styles/AdminSideStyle.css";

function AdminDashboard() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    // window.location.reload();
    window.addEventListener("load", () => {
      fetchData();
    });
  });

  const fetchData = async () => {
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setInfo((arr) => [...arr, doc.data()]);
    });
  };
  //
  return (
    <div className="AdminDashboard">
      <p>Admin Dashboard</p>
      {info.map((data) => (
        <div className="div">
          <p>NAME : {data.name}</p>
          <p>Email : {data.email}</p>
          <p>
            PuzzleTime : {data.puzzletime.seconds} secs :{" "}
            {data.puzzletime.minutes} mins : {data.puzzletime.hours} hrs
          </p>
          <p>
            TotalTime : {data.totaltime.seconds} secs : {data.totaltime.minutes}{" "}
            mins : {data.totaltime.hours} hrs
          </p>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
