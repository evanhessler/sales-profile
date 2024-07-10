import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useProfile } from "../context/ProfileContext";
import Box from "@mui/material/Box";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastForwardIcon from "@mui/icons-material/FastForward";

function Navbar() {
  const { profileData, setTimeSpeed } = useProfile();
  const theme = useTheme();

  const handleSpeedChange = (event, newSpeed) => {
    if (newSpeed !== null) {
      setTimeSpeed(newSpeed);
    }
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#000", marginBottom: theme.spacing(2) }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src="/logo.svg" alt="Logo" style={{ width: 200 }} />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Box>
            <Typography variant="subtitle1" color="common.white" gutterBottom>
              Profile Speed
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={profileData.profileStatus.speed}
              exclusive
              onChange={handleSpeedChange}
              aria-label="Profile speed"
              sx={{
                "& .MuiToggleButtonGroup-grouped": {
                  border: 0,
                  "&:not(:first-of-type)": {
                    marginLeft: "-1px",
                  },
                  "&:first-of-type": {
                    borderTopLeftRadius: theme.shape.borderRadius,
                    borderBottomLeftRadius: theme.shape.borderRadius,
                  },
                  "&:last-of-type": {
                    borderTopRightRadius: theme.shape.borderRadius,
                    borderBottomRightRadius: theme.shape.borderRadius,
                  },
                  "&.Mui-selected": {
                    color: "black",
                    backgroundColor: "yellow",
                    "&:hover": {
                      backgroundColor: "yellow",
                      opacity: 0.9,
                    },
                  },
                  // Styling for unselected buttons
                  "&:not(.Mui-selected)": {
                    color: theme.palette.grey[300],
                    backgroundColor: theme.palette.grey[700],
                    "&:hover": {
                      backgroundColor: theme.palette.grey[600],
                    },
                  },
                },
              }}
            >
              <ToggleButton value="paused" aria-label="paused">
                <PauseIcon />
              </ToggleButton>
              <ToggleButton value="slow" aria-label="slow">
                <PlayArrowIcon />
              </ToggleButton>
              <ToggleButton value="fast" aria-label="fast">
                <FastForwardIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
