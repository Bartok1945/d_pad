import React from "react";
import "./Bar.css";
import { Link } from "react-router-dom";
import API from '../../utils/API';
import { useHistory } from "react-router-dom";


const Bar = () => {

  let history = useHistory();

  const handleLogout = () => {
    console.log("INSIDE HANDLELOGOUT FUNCTION")
    API.userLogout()
    .then((res) => console.log("res from logout", res))
    .then(response => {response.status === 200 ? history.push('/') : console.log("something aint right")})
    .catch((err) => console.log(err))
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-right">
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
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/Swipes" className="nav-link">
              Swipe
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/playlist" className="nav-link">
              Playlist
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link logout-button" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
        <span className="navbar-text"></span>
      </div>
    </nav>
  );
}

export default Bar;
