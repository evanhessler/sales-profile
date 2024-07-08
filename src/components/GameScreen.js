import React from "react";
import PlayerStats from "./PlayerStats";
import PropertyList from "./PropertyList";
import { useGame } from "../context/GameContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function GameScreen() {
  const { gameData } = useGame();

  // Define columns for the DataGrid
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "address", headerName: "Address", width: 300 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    { field: "rent", headerName: "Rent", width: 150 },
  ];

  return (
    <Box sx={{}}>
      <Box sx={{ px: 2 }}>
        <PlayerStats />
      </Box>
      <Box sx={{ flex: 1, display: "flex" }}>
        <Box sx={{ width: "30%", p: 2 }}>
          <Typography variant="h6">Buy a Property</Typography>
          <PropertyList />
        </Box>
        <Box sx={{ width: "70%", p: 2 }}>
          <Typography variant="h6">Properties Owned</Typography>
          <Box sx={{ height: "50%" }}>
            <DataGrid
              rows={gameData.player.properties}
              columns={columns}
              disableColumnMenu={true}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default GameScreen;
