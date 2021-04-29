import React from "react";
import Bar from "../../components/Bar/Bar";
import SelectionWrapper from "../../components/SelectionWrapper/SelectionWrapper"
import ConsoleBanner from "../../components/ConsoleBanner/ConsoleBanner"
import ConsoleButton from "../../components/ConsoleButton/ConsoleButton"

const ConsolePages = () => {
  return (
    <div>
      <Bar />
      <SelectionWrapper>
        <ConsoleBanner />
        <ConsoleButton />
      </SelectionWrapper>
      
    </div>
  );
};

export default ConsolePages;
