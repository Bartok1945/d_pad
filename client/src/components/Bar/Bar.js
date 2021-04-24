import React from "react";
import "./Bar.css";

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
            <a className="nav-link" href="index.html">
              Swipe
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="portfolio.html">
              Playlist
            </a>
          </li>
        </ul>
        <span className="navbar-text"></span>
      </div>
    </nav>
  );
}

export default Bar;
