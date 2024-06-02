import React, { useRef, useState } from "react";
import "./SignupScreen.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase"; // Ensure this points to your firebase.js file
import { IoCloseOutline } from "react-icons/io5";

function SignupScreen({ handleClose }) {
  const [signup, setsignup] = useState(true);
  const [loading, setloading] = useState(false);
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const switchAuthModeHandler = () => {
    setsignup((prevState) => !prevState);
  };

  const register = (e) => {
    e.preventDefault();
    const enteredemail = emailref.current.value;
    const enteredpassword = passwordref.current.value;
    setloading(true);
    createUserWithEmailAndPassword(auth, enteredemail, enteredpassword)
      .then((userCredential) => {
        setloading(false);
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error.message);
        alert("Please make sure you enter the correct credential");
        setloading(false);
      });
  };

  const signinhandler = (e) => {
    e.preventDefault();
    const enteredemail = emailref.current.value;
    const enteredpassword = passwordref.current.value;
    setloading(true);
    signInWithEmailAndPassword(auth, enteredemail, enteredpassword)
      .then((userCredential) => {
        setloading(false);
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error.message);
        alert("Please make sure you enter the correct credential");
        setloading(false);
      });
  };

  return (
    <div className="SignupScreen">
      <form>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "1rem",
            fontSize: "2rem",
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <IoCloseOutline />
        </div>
        <h1>{signup ? "Sign up" : "Login In"}</h1>
        <input
          type="text"
          placeholder="Enter Your Email"
          ref={emailref}
          required
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          ref={passwordref}
          required
        />
        {loading && <p>Loading content....</p>}
        {!loading && signup && <button onClick={register}>Sign Up</button>}
        {!loading && !signup && (
          <button onClick={signinhandler}>Login In</button>
        )}
        <h2>
          <span onClick={switchAuthModeHandler}>
            {!signup ? "Sign up" : "Login In"}
          </span>
        </h2>
      </form>
    </div>
  );
}

export default SignupScreen;
