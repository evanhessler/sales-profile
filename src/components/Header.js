import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Header() {
  const { isAdminViewVisible, setAdminViewVisible } =
    useContext(ProfileContext);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(0deg, #212121, #3E1391)",
        py: { xs: 2, md: 5 },
      }}
    >
      <img
        src="/logo.svg"
        alt="FlipSystem Logo"
        style={{ maxWidth: "200px", marginTop: 20, marginBottom: 20 }}
      />
      <Box sx={{ margin: 1 }}>
        <Typography variant="h1" textAlign="center">
          Evan Hessler - Welcome to your FlipSystem Profile!
        </Typography>
      </Box>
      <Box sx={{ margin: 1 }}>
        <Typography textAlign="center">
          We are accepting high-achieving individuals who are open to
          accumulating wealth with real estate. You are here because you need to
          make an informed decision on investing your time and money. Use this
          page to see if investing with FlipSystem is right for{" "}
          <span onClick={() => setAdminViewVisible(!isAdminViewVisible)}>
            you.
          </span>
        </Typography>
      </Box>
    </Container>
  );
}
