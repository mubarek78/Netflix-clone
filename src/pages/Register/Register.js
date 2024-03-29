import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { signup } from "../../features/user";
import "./register.css";


import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [isEmail, setIsemail] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFinish = async (e) => {
    e.preventDefault();
      // console.log(e.target)
      console.log(email)
      console.log(username)
      console.log(password)
     
      try {
        //Create user
        const res = await createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user)
          navigate("/login");
        })
      } catch (err) {
        setErr(true);
        setLoading(false);
      }

    // try {
    //   await axios.post("http://localhost:8800/api/auth/register", { email, username, password });
    //   navigate("/login");
    // } catch (err) {}
  };

  const handleStart = () => {
    email && setIsemail(true);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!isEmail ? (
          <div className="input">
            <input type="email" placeholder="email address" onChange={(e) => setEmail(e.target.value)} />
            <button className="registerButton" onClick={() => handleStart()}>
              Get Started
            </button>
          </div>
        ) : (
          <>
          <form className="input">
            <input type="username" placeholder="username" onChange={(e) => setUsername(e.target.value) }/>
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value) }/>
            <button disabled={loading} className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
          {loading && "Processing please wait..."}
          {err && <span>Something went wrong please try again</span>}
          </>
        )}
      </div>
    </div>
  );
}