import React from "react";
import Bar from "../../components/Bar/Bar";
import SelectionWrapper from "../../components/SelectionWrapper/SelectionWrapper"
import GenreBanner from "../../components/GenreBanner/GenreBanner"
import GenreButton from "../../components/GenreButton/GenreButton"


const GenresPages = () => {
  return (
    <div>
      <Bar />
      <SelectionWrapper>
        <GenreBanner />
        <GenreButton />
      </SelectionWrapper>
    </div>
  );
};

export default GenresPages;
