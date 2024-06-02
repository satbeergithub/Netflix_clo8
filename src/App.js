import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./component/Login/Login";
import { login, logout, selectuser } from "./store/userslice";
import Homescreen from "./component/homescreen/Homescreen";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import auth from "./firebase"; // Ensure the correct path to your firebase.js file

const App = () => {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    const authInstance = getAuth();
    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      if (user) {
        // User is signed in.
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return <div>{!user ? <Login /> : <Homescreen />}</div>;
};

export default App;
