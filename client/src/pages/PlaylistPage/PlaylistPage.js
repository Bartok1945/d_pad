import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Bar from "../../components/Bar/Bar";
import PlaylistBox from "../../components/PlaylistBox/PlaylistBox";

const PlaylistPage = () => {
  
  return (
    <PageWrapper>
      <Bar />
      <PlaylistBox key={Math.floor(Math.random() * 100) + 1}/>
    </PageWrapper>
  );
};

export default PlaylistPage;
