import React from "react";
import "./PlaylistBox.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const PlaylistBox = () => {
  const games = [
    { id: "Hollow Knight", played: false },
    { id: "Borderlands", played: false },
    { id: "Little Big Planet 2", played: false },
    { id: "Crash Bandicoot", played: true },
    { id: "Spyro", played: true },
    { id: "Mario Party 2", played: true },
    { id: "The Lion King", played: true },
  ];


  function handleClickPlayed(e) {
    e.preventDefault();
    console.log('The played button was clicked');
    games.id = true;

  }

  function handleClickDel(e) {
    e.preventDefault();
    console.log('The delete button was presssed');
  }



  return (
    <div>
      <Container fluid>
        <Row className="justify-content-md-center mainBox" md={1}>
          <Jumbotron fluid>
            <Row>
              <Col md={3}>
                <div className="logo">
                  <img
                    className="logo"
                    src="https://user-images.githubusercontent.com/74163812/116794268-b77be380-aa99-11eb-9b5c-c3298c088690.png"
                    alt="highscore"
                  />
                </div>
              </Col>

              <Col md={{ span: 6, offset: 1 }}>
                <Row>
                  <Col md={{ span: 3, offset: 1 }}>
                    <div className="container1">
                    <h2 >Games to beat:</h2>
                    <ul>
                    {games.filter(game => game.played === false).map(gamePlayed => (
                          <li>
                           <p>{gamePlayed.id}</p>
                            <button className="played" id={gamePlayed.id} onClick={handleClickPlayed}>
                              Played
                            </button>
                          </li>
                      ))}
                      </ul>
                    </div>
                  </Col>
                  <Col md={{ span: 3, offset: 4 }}>
                    <div className="container2">
                      <h2>Games in the Vault:</h2>
                      <ul>
                      {games.filter(game => game.played === true).map(gamePlayed => (
                          <li>
                           <p>{gamePlayed.id}</p>
                            <button className="delete" id={gamePlayed.id} onClick={handleClickDel}>
                              delete
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Jumbotron>
        </Row>
      </Container>
    </div>
  )
};

export default PlaylistBox;
