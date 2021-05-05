import React from "react";
import "./Bar.css";
import { Link } from "react-router-dom";

function Bar() {
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
            <Link to="/" className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
        <span className="navbar-text"></span>
      </div>
    </nav>
  );
}

export default Bar;
