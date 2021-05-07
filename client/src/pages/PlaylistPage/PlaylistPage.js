import React from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Bar from "../../components/Bar/Bar";
import PlaylistBox from "../../components/PlaylistBox/PlaylistBox";

const PlaylistPage = () => {
  const games = [
    { id: "Hollow Knight", played: false },
    { id: "Borderlands", played: false },
    { id: "Little Big Planet 2", played: false },
  ];

  return (
    <PageWrapper>
      <Bar />
      <PlaylistBox id={games.id} played={games.played} />
    </PageWrapper>
  );
};

export default PlaylistPage;
