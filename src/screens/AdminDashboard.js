import React, { useEffect, useState } from "react";
import { db } from "../firebaseconfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import "../styles/AdminSideStyle.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebaseconfig";
import { Navigate, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [info, setInfo] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const fetchData = async () => {
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.data().totaltime[1].minutes);

      setInfo((arr) => [...arr, doc.data()]);
      console.log(doc.data());
    });
  };

  return (
    <div className="AdminDashboard">
      <p>Admin Dashboard</p>
      <div className="admin_button">
        <button onClick={fetchData}>Fetch Data</button>
        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          LogOut
        </button>
      </div>
      {info.map((data) => (
        <div className="div">
          <p>Name : {data.name}</p>
          <p>Email : {data.email}</p>
          <p>
            PuzzleTime : {data.puzzletime[0].seconds} s :
            {data.puzzletime[1].minutes} m : {data.puzzletime[2].hours} h
          </p>
          <p>
            TotalTime : {data.totaltime[0].seconds} s :
            {data.totaltime[1].minutes} m : {data.totaltime[2].hours} h
          </p>
          <p>Score: {data.score}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
