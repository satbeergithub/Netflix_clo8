import React, { useState } from "react";
import "./Login.css";
import logo from "../Images/Netflix_logo_PNG1.png";
import SignupScreen from "./SignupScreen";

function Login() {
  const [loginpage, setloginpage] = useState(false);

  const loginhandler = (e) => {
    e.preventDefault();
    setloginpage(true);
  };
  const handleClose = () => {
    setloginpage(false);
  };
  return (
    <div className="login">
      <div className="login_header">
        <img src={logo} alt="li" />
        {/* <button >SIGN IN</button> */}
      </div>

      {loginpage ? (
        <SignupScreen handleClose={handleClose} />
      ) : (
        <>
          <div className="login_body">
            <h1>Watch Unlimited Movies,TV Shows & More</h1>
            <h2>Watch Your Movie & Enjoy</h2>
            <h3>Lets start to Watch! but You need to login</h3>
            <form className="login_form" onSubmit={loginhandler}>
              {/* <input type="text" placeholder="Enter your Email Address" /> */}
              <button>Get started</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
