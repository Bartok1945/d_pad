import React from "react";
import "./SelectionWrapper.css";
// import TinyBanner from "./TinyBanner/TinyBanner"
// import ChoiceButton from "../../components/ChoiceButton/ChoiceButton"



const SelectionWrapper = (props) => {
  return (
    <div className="jumbotronCon">
      <div className="jb">
          {props.children}
      </div>
    </div>
  )
};

export default SelectionWrapper;