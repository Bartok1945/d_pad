import React from "react";
import GifDisplay from "../../components/GifDisplay/GifDisplay";
import HomeWrapper from "../../components/HomeWrapper/HomeWrapper";
import LoginSignup from "../../components/LoginSignup/LoginSignup";

const Homepage = () => {
  return (
    <div>
      <HomeWrapper>
        <GifDisplay />
        <LoginSignup />
      </HomeWrapper>
    </div>
  );
};

export default Homepage;
