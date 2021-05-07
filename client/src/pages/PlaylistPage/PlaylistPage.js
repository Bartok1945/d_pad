import React, { Component } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Bar from "../../components/Bar/Bar";
import PlaylistBox from "../../components/PlaylistBox/PlaylistBox";

const games = [
  {id:"Hollow Knight",played:false},
  {id:"Borderlands",played:false},
  {id:"Little Big Planet 2",played:false},
  // {id:"Crash Bandicoot",played:true},
  // {id:"Spyro",played:true},
  // {id:"Mario Party 2",played:true},
  // {id:"The Lion King",played:true},

]


class PlaylistPage extends Component {
  // Setting this.state.games to the games json array


  render() {
    return (

      <PageWrapper>
        <Bar/>
        {games.map((games) => (
        <PlaylistBox
        id={games.id}
        played={games.played}/>
        ))}
      </PageWrapper>
    );
  }
};

export default PlaylistPage;
