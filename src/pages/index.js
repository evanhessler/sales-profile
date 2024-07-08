import React from "react";
import Meta from "./../components/Meta";
import GameScreen from "./../components/GameScreen";
import Navbar from "../components/Navbar";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <Navbar />
      <GameScreen />
    </>
  );
}

export default IndexPage;
