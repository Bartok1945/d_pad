import React from "react";
import "./GameCard.css";

function GameCard(props) {
  return (
    <div className="container mainContainer m-5">
      <div className="switch d-flex justify-self-center">
        <div className="controller">
          <div className="controller-left left col-l-2 col-m-2 col-s-2">
            <div className="button-minus"></div>
            <div
              onClick={() => props.removeGame(props.id)}
              className="remove"
              id="controller-joystick"
            >
              <i className="fas fa-thumbs-down"></i>
            </div>
            <div className="button-top button-top-right"></div>
            <div className="buttonsDivL justify-container-center ml-5">
              <div className="button"></div>
              <div className="button"></div>
              <div className="button"></div>
              <div className="button"></div>
            </div>
            <div className="button button-home"></div>
          </div>

          <div className="jumbotron gameInfo">
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
                        <strong>Title:</strong> {props.name}
                      </li>
                      <li>
                        <strong>Platform(s):</strong> {props.platforms}
                      </li>
                      <li>
                        <strong>Rating:</strong> {props.rating}
                      </li>
                      <li>
                        <strong>Release Date:</strong> {props.released}
                      </li>
                      <li>
                        <strong>Description:</strong> {props.description}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="controller-right col-l-2 col-m-2 col-s-2">
              <div className="button-plus"></div>
              <div
                onClick={() => props.addGame(props.id)}
                className="add"
                id="controller-joystick"
              >
                <i className="fas fa-thumbs-up"></i>
              </div>
              <div className="button-top button-top-right"></div>
              <div className="buttonsDivR justify-container-center ml-5">
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
              </div>
              <div className="button button-capture"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
