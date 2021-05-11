import React, { useEffect, useState } from "react";
import "./PlaylistBox.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import API from "../../utils/API";
import { useAlert } from "react-alert";


const PlaylistBox = () => {
  const [userGames, setUserGames] = useState([]);
  const [userData, setUserData] = useState({});
  const alert = useAlert();


  useEffect(() => {
    API.getUser()
      .then((response) => {
        setUserData(response);
      })
      .then(() => console.log("userData from PlaylistBox", userData))
      .then(getUserGames())
      .catch((err) => console.log("err from useEffect in swipes.js useEffect", err));
  }, []);

  useEffect(() => {
    API.getUserGames(userData.data)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }, [userGames]);

  const getUserGames = () => {
    API.getUserGames(userData.data)
      .then((response) => setUserGames(response.data.games))
      .catch((err) => console.log(err));
  };

  const deleteUserGame = (game) => {
    console.log("GAME DATA IN deleteUSerGame", JSON.stringify(game.id));
    API.deleteUserGame(JSON.stringify(game.id))
      .then((response) => setUserGames(response.data.games))
      .then(() => alert.success(`"${game.title}" has been deleted.`))
      .catch((err) =>
        console.log("The following error occurred in deleteUserGame = ", err)
      );
  };

  const updateGame = (game) => {
    console.log("GAME DATA IN deleteUSerGame", JSON.stringify(game.id));
    API.updateGame(JSON.stringify(game.id))
      .then((response) => setUserGames(response.data.games))
      .catch((err) =>
        console.log("The following error occurred updateGame = ", err)
      );
  };

  return (
    <div>
      <Container className="containerPlay d-flex justify-content-md-center">
        <div className="jumbotronMain">
          <Row>
            <Col md={4}>
              <div className="logo">
                <img
                  src="https://user-images.githubusercontent.com/74163812/116794268-b77be380-aa99-11eb-9b5c-c3298c088690.png"
                  alt="highscore"
                  height="100%"
                  width="100%"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="gamesContainer">
                <h2>Games to beat:</h2>
                {!userGames
                  ? null
                  : userGames
                      .filter((game) => game.played === false)
                      .map((game) => (
                        <ul key={game.id}>
                          <li>{game.title}</li>
                          <button
                            className="delete"
                            id={game.id}
                            onClick={() => updateGame(game)}
                          >
                            Played
                          </button>
                        </ul>
                      ))}
              </div>
            </Col>
            <Col md={4}>
              <div className="gamesContainer">
                <h2>Games Beaten:</h2>
                {!userGames
                  ? null
                  : userGames
                      .filter((game) => game.played === true)
                      .map((game) => (
                        <ul key={game.id}>
                          <li>{game.title}</li>
                          <button
                            className="delete"
                            id={game.id}
                            onClick={() => deleteUserGame(game)}
                          >
                            Delete
                          </button>
                        </ul>
                      ))}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default PlaylistBox;
