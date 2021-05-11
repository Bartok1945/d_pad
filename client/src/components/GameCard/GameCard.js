import React from "react";
import "./GameCard.css";
import LeftSwitch from "../../components/GameCard/LeftSwitch.png";
import RightSwitch from "../../components/GameCard/RightSwitch.png";

function GameCard(props) {
  {console.log(props)}
  return (
    <div className="container">
      <div className="switch justify-content-md-center">
        <div className="controller">
          <div className="controller-left left col-l-2 col-m-2 col-s-2">
            <img src={LeftSwitch} className="left-cont" alt="left" />
            <div
              onClick={() => props.nextGame()}
              className="buttonRed"
              id="controller-joystick"
            >
              <i className="fas fa-thumbs-down"></i>
            </div>
          </div>
          <div className="jumbotronGame col-l-8 col-m-8 col-s-8">
            <div className="container-text">
              <div className="jumbotron-body">
                <div className="card">
                  <div className="img-container">
                    <img
                      className="imageContainer"
                      alt={props.name}
                      src={props.image}
                    />
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <strong className="tealColor title">{props.name}</strong>{" "}
                      </li>
                      <li>
                        <strong className="tealColor">Platform(s):</strong>{" "}
                        {props.platforms}
                      </li>
                      <li>
                        <strong className="tealColor">Rating:</strong>{" "}
                        {props.rating}
                      </li>
                      <li>
                        <strong className="tealColor">Release Date:</strong>{" "}
                        {props.released}
                      </li>
                      <li>
                        <strong className="tealColor">Description:</strong>{" "}
                        {props.description}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="controller-right col-l-2 col-m-2 col-s-2">
            <img src={RightSwitch} className="right-cont" alt="right" />
            <div className="buttonGreen">
              <div
                onClick={() => props.addGame(props.id)}
                className="add"
                id="controller-joystick"
              >
                <i className="fas fa-thumbs-up"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
