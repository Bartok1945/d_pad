import React, { useState } from "react";
import "./ConsoleButton.css";
import API from "../../utils/API";
import axios from "axios";

const ConsoleButton = () => {

  const [games, setGames] = useState([]);
  const [platform, setPlatform] = useState();

  const handleConsoleSelection = (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log("EVVENT ==", value)

    setPlatform(value);
    getGames(platform);
  };

  const getGames = () => {
    console.log('platform ==', platform)
    {platform === 'All' ?
    API.getAllGames()
    .then((response) => setGames(response.data.results))
    .then(() => console.log('games state when selecting ALL', games))
    .catch((err) =>
        console.log("The following error occurred getting games = ", err))
    :
    console.log("getConsoleGames request")
    API.getConsoleGames(platform)
      .then((response) => setGames(response.data.results))
      .then(() => console.log('games state when selecting ANYTHING ELSE', games))
      .catch((err) =>
        console.log("The following error occurred getting games = ", err)
      );
  }
  console.log('Filter ==', platform)

};

const likeGame = async(event) => {
    const { name } = event.target;
    // API.addGame(name)
    const user = await axios.get('/api/users/auth/me') 
    if(!user){
        console.log('USER NOT LOGGED IN')
    }
    console.log('USER FROM LIKE GAME FUNCTION -> ', user)
    

}

const dislikeGame = (event) => {

}

  return (
    <div>
        <form>
        <select onChange={(event) => handleConsoleSelection(event)}>
          <option value="-">-</option>
          <option value="All" name="All">All</option>
          <option value={187} name="Playstation5">Playstation 5</option>
          <option value={186} name="XboxSeries">Xbox Series</option>
          <option value={7} name="Switch">Switch</option>
          <option value={4} name="PC">PC</option>
        </select>
        </form>
      <br />
      <br />
      {/* {games.length === 0 ? <p className="text-white">GAMES ARE ZERO</p> : <p>GAMES ARE A PLENTY</p>} */}
      {games.length === 0 ? <p className="text-white">No games found, please select a fucking console.</p> :
      games.map((game) => {
        return ( 
        <div className={"text-white"}>
        <h5>Title: {game.name}</h5>
        <li>Released: {game.released}</li>
        <li>Rating: {game.rating} / 5</li>
        <br />
        <button name={game.name} onClick={(evt) => likeGame(evt)}>LIKE</button>
        <button onClick={(event) => dislikeGame(event)}>DISLIKE</button>
        <br/>
        <br />
        </div>
        
      )})}
    </div>
  );
};

export default ConsoleButton;