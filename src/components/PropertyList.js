import React from "react";
import { useGame } from "../context/GameContext";
import PropertyItem from "./PropertyItem";

function PropertiesList() {
  const { gameData, generateProperty } = useGame();

  return (
    <div>
      <div id="filterButtons">
        <button onClick={() => generateProperty("low")}>Low Price</button>
        <button onClick={() => generateProperty("medium")}>Medium Price</button>
        <button onClick={() => generateProperty("high")}>High Price</button>
      </div>
      <div id="propertiesForSale">
        {gameData.nextProperty && (
          <PropertyItem
            key={gameData.nextProperty.id}
            property={gameData.nextProperty}
          />
        )}
      </div>
    </div>
  );
}

export default PropertiesList;
