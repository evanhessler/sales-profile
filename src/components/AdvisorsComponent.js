import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function AdvisorsComponent({ advisors }) {
  return (
    <Box sx={{ m: 1 }}>
      <Typography
        variant="h6"
        textAlign={{ xs: "center", md: "left" }}
        sx={{ mb: 1 }}
      >
        Meet Your Advisors
      </Typography>
      <Grid container spacing={2}>
        {advisors.map((advisor, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{ p: 2, display: "flex", alignItems: "center" }}
            >
              <Avatar
                src={advisor.avatar || "/default-avatar.png"}
                sx={{ width: 100, height: 100, mr: 2 }}
              />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {advisor.name}
                </Typography>
                <Typography variant="body2">{advisor.email}</Typography>
                <Typography variant="body2">{advisor.phone}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "italic",
                    fontWeight: "light",
                    fontSize: "0.875rem",
                  }}
                >
                  {advisor.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
