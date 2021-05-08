import React, { useEffect, useState } from "react";
import "./PlaylistBox.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import API from "../../utils/API";

const PlaylistBox = () => {
  // const games = [
  //   { id: "Hollow Knight", played: false },
  //   { id: "Borderlands", played: false },
  //   { id: "Little Big Planet 2", played: false },
  //   { id: "Crash Bandicoot", played: true },
  //   { id: "Spyro", played: true },
  //   { id: "Mario Party 2", played: true },
  //   { id: "The Lion King", played: true },
  // ];

  const [userGames, setUserGames] = useState([])
  const [userData, setUserData] = useState({})
  // const [beatenGames, setBeatenGames] = useState([])


  useEffect(() => {
    API.getUser()
      .then((response) => {
        setUserData(response)
      })
      .then(() => console.log("userData from PlaylistBox", userData))
      .then(getUserGames())
      .catch((err) => console.log("err from useEffect in swipes.js", err));
  }, []);

  useEffect(() => {
    API.getUserGames(userData.data)
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err))
  }, [userGames])

  const getUserGames = () => {
    API.getUserGames(userData.data)
    .then((response) => setUserGames(response.data.games))
    .catch((err) => console.log(err))
  };

  const deleteUserGame = (game) => {
    console.log("GAME DATA IN deleteUSerGame", JSON.stringify(game.id))
    API.deleteUserGame(JSON.stringify(game.id))
      .then((response) => setUserGames(response.data.games))
      .catch((err) =>
        console.log("The following error occurred adding games = ", err)
      );
  };

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
                      <h2>Games to beat:</h2>
                      {/* {!userGames ? null : userGames.map((game) => (
                        <ul>
                          <li>{game.title}</li>
                          <button className="delete" id={game.id}>
                            Played
                          </button>
                        </ul>
                      ))} */}
                    </div>
                  </Col>
                  <Col md={{ span: 3, offset: 4 }}>
                    <div className="container2">
                      <h2>Games Beaten:</h2>
                      {!userGames ? null : userGames.map((game) => (
                        <ul>
                          <li>{game.title}</li>
                          <button className="delete" id={game.id} onClick={() => deleteUserGame(game)}>
                            Delete
                          </button>
                        </ul>
                      ))}
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
