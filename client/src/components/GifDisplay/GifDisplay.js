import React from "react";
import './GifDisplay.css';

function GifDisplay() {
  return (
    <div className="jumbotron">
      <img
        src="https://user-images.githubusercontent.com/74163812/115273885-1b9fbe80-a10e-11eb-8d9d-187028989636.gif"
        className="card-img-top mb-5"
        alt="d-Pad Banner"
      ></img>
      <hr className="hr"></hr>
      <div className="container-text">
          <div className="containerForm.transbox mt-3">
            <div className="container">
              <div className="row">
                <h1 id="header">"I'm the Hero of a Thousand Stories."</h1>
                <h4>
                  With the myriad of games available in today's market, it's
                  hard to know what to play next and even harder to keep track
                  of that evergrowing list.
                </h4>
                <br></br>
                <h4>
                  Browze games in your favorite categories, swipe right on
                  Must-Plays, and organize them with ease with D-Pad!
                </h4>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default GifDisplay;
