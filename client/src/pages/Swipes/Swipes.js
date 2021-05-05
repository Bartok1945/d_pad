import React, { useState, useEffect } from "react";
import GameCard from "../../components/GameCard/GameCard";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Bar from "../../components/Bar/Bar";
import API from "../../utils/API";

const Swipes = () => {
  // Setting this.state.games to the games json array
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

  const removeGame = (id) => {
    games.filter((game) => game.id !== id);
    setGames(games);
  };

  const addGame = (id) => {
    games.filter((game) => game.id !== id);
    setGames(games);
  };

  const handlePlatform = (event) => {
      const { value } = event.target
      setPlatform(value);
  }

  return (
    <PageWrapper>
      <Bar />
      <form>
        <select onChange={(event) => handlePlatform(event)}>
          <option value="-">-</option>
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
      {games.map((game) => (
        <GameCard
          id={game.id}
          removeGame={removeGame}
          addGame={addGame}
          key={game.id}
          name={game.name}
          image={game.background_image}
          platforms={game.platforms.map(p => `${p.platform.name}   | ` )}
          rating={game.rating}
          released={game.released}
        />
      ))}
    </PageWrapper>
  );
};

export default Swipes;
