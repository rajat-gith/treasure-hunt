import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles/AdminSideStyle.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";

function AdminLoginScreen() {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user && user.uid == "uuxbmJLF6xWlF8K5gfApNxfrdu43") {
      console.log(user.uid);
      navigate("/admin/dashboard");
    } else {
      alert("Enter Correct credentials");
    }
  }, [user, loading]);

  return (
    <div className="Admin">
      <div className="bg">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5325bfa7-9653-4112-a675-757f92760da8/dcej392-c13becc9-a497-482d-9070-23b75e007843.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzMjViZmE3LTk2NTMtNDExMi1hNjc1LTc1N2Y5Mjc2MGRhOFwvZGNlajM5Mi1jMTNiZWNjOS1hNDk3LTQ4MmQtOTA3MC0yM2I3NWUwMDc4NDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lDkiw0Jy7UkIVYL398Tcc7-N3CR7oYeZoH9FlBQfPF8"
          alt=""
        />
      </div>
      <div className="login_window">
        <p>Admin Login</p>
        <div className="LoginForm">
          <TextField
            id="filled-basic"
            label="Email"
            type={"email"}
            onChange={(e) => {
              setAdminEmail(e.target.value);
            }}
            variant="filled"
          />
          <TextField
            id="filled-basic"
            label="Password"
            sx={{ mt: 2 }}
            type={"password"}
            onChange={(e) => {
              setAdminPassword(e.target.value);
            }}
            variant="filled"
          />
          <input
            onClick={() => logInWithEmailAndPassword(adminEmail, adminPassword)}
            type="submit"
          />
          <Link to="/">
            <Button type="outlined">Switch to Play Mode</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginScreen;
