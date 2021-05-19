import React, { useState } from "react";
import "./LoginSignup.css";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

const LoginSignup = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const emailValidation = (input) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input) ? true : false;

  const alert = useAlert();

  const onChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("userData from handleSignup", userData);
    if (!userData.email) {
      return alert.show("Please enter an email address");
    }
    if (!userData.password) {
      return alert.show("Please enter a password");
    }
    emailValidation(userData.email)
      ? signUpUser(userData)
      : alert.show("Please enter a valid email address (ex: email@email.com)");
  };

  let history = useHistory();

  // Update history.push()
  const signUpUser = (userData) => {
    console.log("usrData form signUpUser function ==", userData);
    API.userSignup(userData)
      .then(console.log("USER HAS BEEN SIGNED UP!"))
      .then((response) => {
        response.status === 200
          ? history.push("/nextPage")
          : console.log("something aint right");
      })
      .catch((err) => console.log("SIGN UP ERROR ==>", err));
  };

  // Update history.push()
  const handleLogin = (e) => {
    e.preventDefault();
    if (!userData.email) {
      return alert.show("Please enter your email address");
    }
    if (!userData.password) {
      return alert.show("Please enter your password");
    }
    console.log("USER DATA ==", userData);
    if (emailValidation(userData.email)) {
      API.userLogin(userData)
        .then(console.log("USER HAS BEEN LOGGED IN!"))
        .then((response) => {
          response.status === 200
            ? history.push("/nextPage")
            : console.log("something aint right");
        })
        .catch((err) => console.log("LOGIN ERROR ==>", err));
    } else {
      alert.error("Please enter a valid email address (ex: email@email.com)");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6 align-self-start">
          <h3>Signup</h3>
          <form>
            <div className="form-group">
              <label htmlFor="signupEmail">Email</label>
              <input
                type="email"
                className="form-control w-50"
                id="signupEmail"
                placeholder="Email"
                name="email"
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage">Password</label>
              <input
                type="password"
                className="form-control w-50"
                id="signupPassword"
                placeholder="Password"
                name="password"
                onChange={onChange}
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="col-md-6 align-self-start">
          <h3>Login</h3>
          <div className="login">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control w-50"
                  id="loginEmail"
                  placeholder="Email"
                  name="email"
                  onChange={onChange}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="inputMessage">Password</label>
                <input
                  type="password"
                  className="form-control w-50"
                  id="loginPassword"
                  placeholder="Password"
                  name="password"
                  onChange={onChange}
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
