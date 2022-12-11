import { useContext, useState } from "react";
// import { login } from "../../features/apiCalls";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isFetching, setIsfetching] = useState(false)

    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = async (e) => {
      e.preventDefault();
      // const email = e.target[0].value;
      // const password = e.target[1].value;
      try {
        setIsfetching(true)
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
      } catch (err) {
        setErr(true);
        setIsfetching(false)
      }
    };

    // const dispatch = useDispatch();
    // const { isFetching, error } = useSelector((state) => state.user);
  
    // const handleClick = (e) => {
    //   e.preventDefault();
    //   login(dispatch, { email, password });
    // };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleClick} disabled={isFetching}>
            Sign In
          </button>
          {err && <span>Something went wrong</span>}
          <span>
            New to Netflix?<Link to="/register"><b>Sign up now.</b></Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}