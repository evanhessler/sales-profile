import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  useEffect(() => {
    generateProperty("low");
  }, []);

  const [gameData, setGameData] = useState({
    properties: [],
    nextProperty: null,
    currentDate: new Date(2024, 0, 1),
    gameStatus: {
      isPaused: false,
      speed: "slow",
    },
    player: {
      age: 23,
      bankAccount: 1000000,
      monthlyCashflow: 0,
      properties: [],
      monthlyIncome: 0,
      goal: {
        bankAccount: 1100000,
        monthlyCashflow: 20000,
        age: 80,
      },
      gameStartDate: new Date(),
      gameEndDate: new Date(2025, 5),
      isTimePaused: false,
    },
  });

  const advanceTime = useCallback(() => {
    const newDate = new Date(
      gameData.currentDate.setMonth(gameData.currentDate.getMonth() + 1)
    );
    setGameData((prevGameData) => ({
      ...prevGameData,
      currentDate: newDate,
    }));
  }, [gameData.currentDate, setGameData]);

  useEffect(() => {
    let intervalId;
    if (!gameData.gameStatus.isPaused) {
      const intervalDuration =
        gameData.gameStatus.speed === "slow" ? 10000 : 5000;
      intervalId = setInterval(advanceTime, intervalDuration);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [gameData.gameStatus, advanceTime]);

  useEffect(() => {
    generateProperty("low");
  }, []);

  const setTimeSpeed = (speed) => {
    setGameData({
      ...gameData,
      gameStatus: {
        ...gameData.gameStatus,
        speed,
        isPaused: speed === "paused",
      },
    });
  };

  const generateProperty = (filter) => {
    const basePrice = determineBasePrice(filter);
    const rehab = calculateRehabCost();
    const price = basePrice + rehab;
    const rentMultiplier = determineRentMultiplier(filter);
    const rent = Math.round((price * rentMultiplier) / 50) * 50;
    const postRehabRent = Math.round((rent * 1.2) / 50) * 50;
    const arv = Math.round((price + rehab * 1.5) / 500) * 500;
    const isTenanted = Math.random() > 0.5;
    const constructionDuration = Math.floor(Math.random() * 3) + 1;
    const streetNumber = Math.floor(Math.random() * 100) + 1;
    const streetName = randomStreetName();
    const propertyImage = selectRandomImage();

    const newProperty = {
      id: `${new Date().getTime()}`,
      image: propertyImage,
      price,
      downPayment: price * 0.2,
      monthlyPayment: (price / 30).toFixed(2),
      rent,
      postRehabRent,
      arv,
      rehab,
      constructionDuration,
      address: `${streetNumber} ${streetName}`,
      status: isTenanted ? "Tenanted" : "Vacant",
    };

    setGameData((prevGameData) => ({
      ...prevGameData,
      nextProperty: newProperty,
    }));
  };

  return (
    <GameContext.Provider value={{ gameData, generateProperty, setTimeSpeed }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);

const determineBasePrice = (filter) => {
  let basePrice;
  switch (filter) {
    case "low":
      basePrice =
        Math.round((Math.floor(Math.random() * 100000) + 50000) / 500) * 500;
      break;
    case "medium":
      basePrice =
        Math.round((Math.floor(Math.random() * 300000) + 100000) / 500) * 500;
      break;
    case "high":
      basePrice =
        Math.round((Math.floor(Math.random() * 600000) + 300000) / 500) * 500;
      break;
    default:
      basePrice = 0;
  }
  return basePrice;
};

const calculateRehabCost = () => {
  return Math.round((Math.floor(Math.random() * 30000) + 10000) / 500) * 500;
};

const determineRentMultiplier = (filter) => {
  switch (filter) {
    case "low":
      return 0.009;
    case "medium":
      return 0.007;
    case "high":
      return 0.005;
    default:
      return 0;
  }
};

const randomStreetName = () => {
  const streetNames = [
    "Maple Street",
    "Oak Street",
    "Elm Street",
    "Pine Street",
    "Cedar Street",
    "Willow Street",
    "Main Street",
    "Broadway",
    "High Street",
    "Park Avenue",
  ];
  return streetNames[Math.floor(Math.random() * streetNames.length)];
};

const selectRandomImage = () => {
  const propertyPics = [
    "https://flipsystem-static-assets.s3.amazonaws.com/undefined/a36684f5-7a66-4c2f-b6f3-2427447990d3_TestHouseImage.jpg",
    "https://listing-images.homejunction.com/maris/MAR92276352/photo_1.jpg",
    "https://listing-images.homejunction.com/maris/MAR92701299/photo_1.jpg",
    "https://flipsystem-static-assets.s3.amazonaws.com/Prod/marketplace/properties-images/de90f30c-d83a-478f-b670-763a3269c4ca_1.jpeg",
  ];
  return propertyPics[Math.floor(Math.random() * propertyPics.length)];
};
