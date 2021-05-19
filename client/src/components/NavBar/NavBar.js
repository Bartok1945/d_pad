import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  let history = useHistory();

  const handleLogout = () => {
    console.log("INSIDE HANDLELOGOUT FUNCTION");
    API.userLogout()
      .then(() => console.log("API.userLogout"))
      .then(() => history.push("/"))
      .catch((err) => console.log("ERROR FROM handleLogout =>", err));
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">APP NAME</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarText"
          >
            <ul className="nav navbar-nav float-right">
              <li className="nav-item">
                <Link to="/page1" className="nav-link">
                  Page1
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/page2" className="nav-link">
                  Page2
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
              {/* <li className="nav-item">
                <button
                  className="nav-link logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
