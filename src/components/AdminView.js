import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { Box, Button, Typography, Paper, Grid } from "@mui/material";

const AdminScholarshipReview = () => {
  const {
    isAdminViewVisible,
    grantAmount,
    circumstancesQuestion,
    additionalQuestion,
    additionalQuestionAnswer,
    grantSubmitted,
    setGrantApproved,
    showGrant,
    setShowGrant,
    grantApproved,
  } = useContext(ProfileContext);

  const toggleGrantVisibility = () => {
    setShowGrant(!showGrant); // Toggle the visibility
  };

  if (!isAdminViewVisible) {
    return null;
  }

  return (
    <Box sx={{ m: 1, mt: 3 }}>
      <Typography
        variant="h6"
        textAlign={{ xs: "center", md: "left" }}
        sx={{ mb: 1 }}
      >
        Admin View
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        {!grantSubmitted && (
          <Button
            variant="contained"
            sx={{
              mb: 2,
              backgroundColor: "#4a148c",
              "&:hover": { backgroundColor: "#6a1b9a" },
            }}
            onClick={toggleGrantVisibility}
          >
            {showGrant ? "Hide Grant Application" : "Show Grant Application"}
          </Button>
        )}

        {grantSubmitted && showGrant ? (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                elevation={3}
                sx={{ p: 2, display: "flex", alignItems: "center" }}
              >
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    Grant Application Review
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>Grant Amount:</strong> {grantAmount}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>
                      Explain the circumstances surrounding your requirement for
                      a FlipSystem grant.:
                    </strong>{" "}
                    {circumstancesQuestion}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>{additionalQuestion}</strong>:{" "}
                    {additionalQuestionAnswer}
                  </Typography>
                  <Button
                    onClick={() => setGrantApproved(true)}
                    disabled={grantApproved}
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: grantApproved ? "#9e9e9e" : "#6a1b9a",
                      "&:hover": {
                        backgroundColor: grantApproved ? "#9e9e9e" : "#4a148c",
                      },
                      "&.Mui-disabled": {
                        backgroundColor: "#9e9e9e",
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                    }}
                  >
                    {grantApproved ? "Grant Approved" : "Approve Application"}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Typography>
            {!showGrant
              ? "Application visibility is off to the client."
              : "No active applications."}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default AdminScholarshipReview;
