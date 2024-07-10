import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Confetti from "react-confetti";

export default function ScholarshipForm() {
  const [scholarshipAmount, setScholarshipAmount] = useState("");
  const [scholarshipReason, setScholarshipReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [approved, setApproved] = useState(false);
  const [alertPosition, setAlertPosition] = useState({ x: 0, y: 0, width: 0 });
  const [confettiRecycle, setConfettiRecycle] = useState(true);
  const alertRef = useRef(null);

  useEffect(() => {
    if (submitted && approved) {
      const alertBox = alertRef.current.getBoundingClientRect();
      setAlertPosition({
        x: alertBox.left,
        y: alertBox.top + alertBox.height / 2,
        width: alertBox.width,
      });

      setTimeout(() => {
        setConfettiRecycle(false);
      }, 10000); // Stop confetti after 10 seconds
    }
  }, [submitted, approved]);

  const handleScholarshipSubmit = (event) => {
    event.preventDefault();
    console.log("Scholarship Amount:", scholarshipAmount);
    console.log("Scholarship Reason:", scholarshipReason);
    setSubmitted(true);
    setApproved(Math.random() > 0.5); // Randomly approve or deny for demo
    setConfettiRecycle(true);
  };

  return (
    <Box sx={{ m: 1, mt: 3 }}>
      <Typography
        variant="h6"
        textAlign={{ xs: "center", md: "left" }}
        sx={{ mb: 1 }}
      >
        Apply for a Grant
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography textAlign="center" sx={{ fontSize: 16, mb: 2 }}>
          FlipSystem awards a limited number of grants to individuals with
          extenuating financial circumstances who are otherwise unable to get
          started in the program. If you qualify, please explain your situation
          below. If awarded, the grant amount will be subtracted from the set-up
          fees.{" "}
          <span
            style={{
              fontStyle: "italic",
              color: "#fff",
            }}
          >
            Note: Grants are highly competitive. An application submission is
            not a guaranteed approval.
          </span>
        </Typography>
        {submitted ? (
          <>
            {approved && (
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                colors={["#9a70d1", "#65ffdc", "#64bfff", "#e499ff"]}
                numberOfPieces={150}
                recycle={confettiRecycle}
                gravity={0.3}
                confettiSource={{
                  x: alertPosition.x,
                  y: alertPosition.y,
                  w: alertPosition.width,
                  h: 10,
                }}
              />
            )}
            <Alert
              ref={alertRef}
              severity={approved ? "success" : "info"}
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: approved ? "#e1fac8" : "#d6f8ff",
                mt: 5,
                mb: 3,
                "& .MuiSvgIcon-root": {
                  mt: 0.1,
                },
              }}
            >
              {approved ? (
                <>
                  Congratulations! Your application has been{" "}
                  <strong>approved</strong>. Your decision is required within 24
                  hours.
                </>
              ) : (
                <>
                  <strong>Application Pending:</strong> Your application is
                  under review. Expect a response in 1-3 business days.
                </>
              )}
            </Alert>
          </>
        ) : (
          <>
            <Box
              component="form"
              onSubmit={handleScholarshipSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 5,
              }}
            >
              <TextField
                select
                label="Select Grant Amount"
                value={scholarshipAmount}
                onChange={(e) => setScholarshipAmount(e.target.value)}
                variant="outlined"
                sx={{
                  mb: 2,
                  width: { xs: "100%", sm: "500px" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#757575",
                    },
                    "&:hover fieldset": {
                      borderColor: "#9e9e9e",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6a1b9a",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#cfcfcf",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#cfcfcf", // Keeps the label color consistent even when focused
                  },
                  "& .MuiInputLabel-root": {
                    color: "#cfcfcf", // Set default label color to white
                  },
                  "& .MuiSvgIcon-root": {
                    color: "#cfcfcf", // Purple color for the dropdown arrow
                  },
                }}
                InputProps={{
                  style: { fontSize: "0.875rem" },
                }}
                InputLabelProps={{
                  style: { fontSize: "0.875rem" },
                }}
              >
                <MenuItem value="3000">Starter Grant - $3,000</MenuItem>
                <MenuItem value="5000">Builder Grant - $5,000</MenuItem>
                <MenuItem value="11000">Leadership Grant - $11,000</MenuItem>
              </TextField>

              <TextField
                label="Explain why you should qualify"
                multiline
                rows={8}
                value={scholarshipReason}
                onChange={(e) => setScholarshipReason(e.target.value)}
                variant="outlined"
                inputProps={{ maxLength: 500 }}
                sx={{
                  mb: 2,
                  width: { xs: "100%", sm: "500px" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#757575",
                    },
                    "&:hover fieldset": {
                      borderColor: "#9e9e9e",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#6a1b9a",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#cfcfcf", // Set default label color to white
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#cfcfcf", // Maintain a different color when focused if desired
                  },
                }}
                InputProps={{
                  style: { fontSize: "0.875rem" },
                }}
                InputLabelProps={{
                  style: { fontSize: "0.875rem" },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#6a1b9a",
                  "&:hover": { backgroundColor: "#4a148c" },
                  color: "#fff",
                }}
              >
                Submit Application
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
}
