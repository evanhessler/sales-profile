import React from "react";
import { useGame } from "../context/GameContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { useTheme } from "@mui/material/styles";

function PlayerStats() {
  const theme = useTheme();
  const { gameData } = useGame();

  return (
    <Box sx={{}}>
      <Typography variant="h6">Game Stats</Typography>
      <Typography variant="body1" gutterBottom>
        Age: {gameData.player.age.toLocaleString()} | Target Age:{" "}
        {gameData.player.goal.age.toLocaleString()}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(gameData.player.age / gameData.player.goal.age) * 100}
        sx={{ marginBottom: theme.spacing(1) }}
      />
      <Typography variant="body1" gutterBottom>
        Bank Account: ${gameData.player.bankAccount.toLocaleString()} | Goal: $
        {gameData.player.goal.bankAccount.toLocaleString()}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={
          (gameData.player.bankAccount / gameData.player.goal.bankAccount) * 100
        }
        sx={{ marginBottom: theme.spacing(1) }}
      />
      <Typography variant="body1" gutterBottom>
        Cashflow: ${gameData.player.monthlyCashflow.toLocaleString()} | Goal: $
        {gameData.player.goal.monthlyCashflow.toLocaleString()}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={
          (gameData.player.monthlyCashflow /
            gameData.player.goal.monthlyCashflow) *
          100
        }
      />
    </Box>
  );
}

export default PlayerStats;
