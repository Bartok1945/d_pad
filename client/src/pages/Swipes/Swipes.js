import React, { useState, useEffect } from "react";
import GameCard from "../../components/GameCard/GameCard";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Bar from "../../components/Bar/Bar";
import API from "../../utils/API";
import './Swipes.css';

const Swipes = () => {
  const [games, setGames] = useState([]);
  const [platform, setPlatform] = useState();

  useEffect(() => {
    {
      platform === "All"
        ? API.getAllGames()
            .then((response) => setGames(response.data.results))
            .then(() => console.log("games state when selecting ALL", games))
            .catch((err) =>
              console.log("The following error occurred getting games = ", err)
            )
        : console.log("getConsoleGames request");
      API.getConsoleGames(platform)
        .then((response) => setGames(response.data.results))
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
      title: game.name
    }
    API.removeGame(gameData)
    .then(() =>
          console.log("gameData", gameData)
        )
        .catch((err) =>
          console.log("The following error occurred adding games = ", err)
        );
        // games.filter((game) => game.id !== id);
        setGames(games);
  };

  const addGame = (game) => {
    let gameData = {
      id: game.id,
      title: game.name
    }
    console.log("GAME DATA", gameData)
    API.addGame(gameData)
    .then(() =>
          console.log("gameData", gameData)
        )
        .catch((err) =>
          console.log("The following error occurred adding games = ", err)
        );
    // games.filter((game) => game.id !== id);
    setGames(games);
  };

  const handlePlatform = (event) => {
      const { value } = event.target
      setPlatform(value);
  }

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
      {games.map((game) => (
        <GameCard
          id={game.id}
          removeGame={() => removeGame(game)}
          addGame={() => addGame(game)}
          key={game.id}
          name={game.name}
          image={game.background_image}
          platforms={game.platforms.map(p => `${p.platform.name}   | ` )}
          rating={game.rating}
          released={game.released}
        />
      ))
      }
    </PageWrapper>
  );
};

export default Swipes;
