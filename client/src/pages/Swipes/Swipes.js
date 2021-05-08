import React, { useState, useEffect } from "react";
import GameCard from "../../components/GameCard/GameCard";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Bar from "../../components/Bar/Bar";
import API from "../../utils/API";
import "./Swipes.css";

const Swipes = () => {
  const [games, setGames] = useState([]);
  const [gameIndex, setGameIndex] = useState(0);
  const [platform, setPlatform] = useState({});
  const [currentGame, setCurrentGame] = useState();

  useEffect(() => {
    if (!platform) return;
    console.log("Platform inside useEffect", platform)
    if (platform === "All") {
      API.getAllGames()
        .then((response) => {
          setGames(response.data.results)
          return response.data.results;
        })
        .then((gameResult) => setCurrentGame(gameResult[0]))
        .catch((err) =>
          console.log("The following error occurred getting games = ", err)
        );
    } else {
      console.log("Platform inside useEffect", platform)
      API.getConsoleGames(platform)
        .then((response) => {
          setGames(response.data.results)
          return response.data.results;
        })
        .then((gameResult) => setCurrentGame(gameResult[0]))
        .then(() =>
          console.log("games state when selecting ANYTHING ELSE", games)
        )
        .catch((err) =>
          console.log("The following error occurred getting games = ", err)
        );
    }
  }, [platform]);

  const removeGame = (game) => {
    let gameData = {
      id: game.id,
      title: game.name,
    };
    API.removeGame(gameData)
      .then(() => console.log("gameData", gameData))
      .catch((err) =>
        console.log("The following error occurred adding games = ", err)
      );
  };

  const addGame = (game) => {
    let gameData = {
      id: game.id,
      title: game.name,
    };
    console.log("GAME DATA", gameData);
    API.addGame(gameData)
      .then(() => console.log("gameData", gameData))
      .catch((err) =>
        console.log("The following error occurred adding games = ", err)
      );
    nextGame();
  };

  const handlePlatform = (event) => {
    console.log("PLATFORM HANDLER", event.target.value);
    const { value } = event.target;
    setPlatform(value);
  };

  let nextGame = () => {
    if (gameIndex !== games.length) {
      setGameIndex(gameIndex + 1);
      console.log("gameIndex inside nextGame", gameIndex);
      console.log("GAME INDEX =>", gameIndex);
    } else {
      console.log("No more games to choose!");
    }
    setCurrentGame(games[gameIndex]);
  };

  return (
    <PageWrapper>
      <Bar />
      <div className="platformDropdown">
        <form>
          <select onChange={(event) => handlePlatform(event)}>
            <option value="-">Select Console</option>
            <option value="All" name="All">
              All
            </option>
            <option value={4} name="PC">
              PC
            </option>
            <option value={186} name="XboxSeries">
              Xbox Series
            </option>
            <option value={187} name="Playstation5">
              Playstation 5
            </option>
            <option value={7} name="Switch">
              Switch
            </option>
            <option value={18} name="Playstation4">
              Playstation4
            </option>
            <option value={1} name="XboxOne">
              XboxOne
            </option>
          </select>
        </form>
      </div>
      {!currentGame ? (
        <p className = "startUp">Select your preferred PLATFORM to begin.</p>
      ) : (
        <GameCard
          id={currentGame.id}
          nextGame={nextGame}
          addGame={() => addGame(currentGame)}
          key={currentGame.id}
          name={currentGame.name}
          image={currentGame.background_image}
          platforms={currentGame.platforms?.map(
            (p) => `${p.platform.name}   | `
          )}
          rating={currentGame.rating}
          released={currentGame.released}
        />
      )}
    </PageWrapper>
  );
};

export default Swipes;
