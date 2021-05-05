import React, { Component } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Bar from "../../components/Bar/Bar";
import PlaylistBox from "../../components/PlaylistBox/PlaylistBox";

class PlaylistPage extends Component {
  // Setting this.state.games to the games json array

  render() {
    return (

      <PageWrapper>
        <Bar/>
        <PlaylistBox/>
      </PageWrapper>
    );
  }
};

export default PlaylistPage;
