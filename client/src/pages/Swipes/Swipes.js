import React, { Component } from "react";
import GameCard from "../../components/GameCard/GameCard";
import games from "../../game.json";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Bar from "../../components/Bar/Bar";
// // import PageWrapper from "../../components/PageWrapper/PageWrapper";
// import SwipeDisplay from "../../components/SwipeDisplay/SwipeDisplay";



class Swipes extends Component {
  // Setting this.state.games to the games json array
  state = {
   games
  };

  removeGame= id => {
    // Filter this.state.games for games with an id not equal to the id being removed
    const games = this.state.games.filter(friend => friend.id !== id);
    // Set this.state.games equal to the new games array
    this.setState({ games });
  };
  addGame= id => {
    //needs to change 
    // Filter this.state.games for games with an id not equal to the id being removed
    const games = this.state.games.filter(friend => friend.id !== id);
    // Set this.state.games equal to the new games array
    this.setState({ games });
  };

  render() {
    return (

      <PageWrapper>
        <Bar/>
        {this.state.games.map(games => (
          <GameCard
            removeGame={this.removeGame}
            addGame={this.addGame}
            id={games.id}
            key={games.id}
            name={games.name}
            image={games.image}
            occupation={games.occupation}
            location={games.location}
          />
       ))}
      </PageWrapper>
    );
  }
};

export default Swipes;
