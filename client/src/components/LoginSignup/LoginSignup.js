import React, { useState } from "react";
import "./LoginSignup.css";
import API from '../../utils/API';
import { useHistory } from "react-router-dom";

const LoginSignup = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

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
    if (!userData.email || !userData.password) {
      return;
    }
    signUpUser(userData);
  };

  const signUpUser = (userData) => {
    console.log("usrData form signUpUser function ==", userData);
    API.userSignup(userData)
      .then(console.log("USER HAS BEEN SIGNED UP!"))
      .then(response => {response.status === 200 ? history.push('/consolepages') : console.log("something aint right")})
      .catch((err) => console.log(err));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    API.userLogin(userData)
    // Use react router here to redirect user to the members page 
      .then(console.log("USER HAS BEEN LOGGED IN!"))
      .then(response => {response.status === 200 ? history.push('/consolepages') : console.log("something aint right")})
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="jumbotron2">
          <div className="row justify-content-md-center userBox">
            <div className="col-sm-4 align-self-start">
              <img
                src="https://user-images.githubusercontent.com/74163812/115132393-bcd32b80-9fcd-11eb-978b-d63343ea6823.png"
                className="signupIMG"
                alt="signupIMG"
              ></img>
              <form>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email"
                    name="email"
                    onChange={onChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="inputMessage">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputMessage"
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
            <div className="col-sm-3 align-self-start">
              <img
                src="https://user-images.githubusercontent.com/74163812/115129566-1c710d00-9fb5-11eb-9c8e-e4529c58bb3e.png"
                className="track"
                alt="track"
              ></img>
            </div>

            <div className="col-sm-4 align-self-start">
              <div className="login">
                <img
                  src="https://user-images.githubusercontent.com/74163812/115132318-1edf6100-9fcd-11eb-8c2b-d907335b7850.png"
                  className="loginIMG"
                  alt="loginIMG"
                ></img>
                <form>
                  <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      name="email"
                      onChange={onChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputMessage">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputMessage"
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
      </div>
    </div>
  );
};

export default LoginSignup;
