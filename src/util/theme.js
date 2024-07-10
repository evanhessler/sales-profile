import React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import * as colors from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    type: "dark", // Always dark mode
    primary: {
      main: colors.indigo["500"],
    },
    secondary: {
      main: colors.pink["500"],
    },
    background: {
      default: colors.grey["900"],
      paper: colors.grey["800"],
    },
    text: {
      primary: "#cfcfcf",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    h1: {
      fontFamily: '"PuviBold", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: 50,
      color: "#fff",
    },
    h6: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 100,
      textTransform: "uppercase",
      fontSize: "clamp(0.75rem, 5vw, 1.2rem)", // Responsive font size based on viewport width
      color: "#cfcfcf",
    },
    fontSize: 18,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "#root": {
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          "& > *": {
            flexShrink: 0,
          },
        },
      },
    },
  },
});

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
