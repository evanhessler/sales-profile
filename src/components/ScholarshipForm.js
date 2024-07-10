import React, { useState, useEffect, useRef, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Confetti from "react-confetti";
import FormHelperText from "@mui/material/FormHelperText"; // Import FormHelperText
import { ProfileContext } from "../context/ProfileContext";

export default function ScholarshipForm() {
  const [scholarshipAmount, setScholarshipAmount] = useState("");
  const [scholarshipReason, setScholarshipReason] = useState("");
  const [additionalQuestionAnswer, setAdditionalQuestionAnswer] = useState("");
  const [alertPosition, setAlertPosition] = useState({ x: 0, y: 0, width: 0 });
  const [confettiRecycle, setConfettiRecycle] = useState(true);
  const alertRef = useRef(null);

  const context = useContext(ProfileContext);

  useEffect(() => {
    console.log("HERE1123", alertRef);
    if (context.showGrant && context.grantApproved && alertRef.current) {
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
  }, [context.showGrant, context.grantApproved, alertRef]);

  const handleScholarshipSubmit = (event) => {
    event.preventDefault();

    context.setGrantAmount(scholarshipAmount);
    context.setCircumstancesQuestion(scholarshipReason);
    context.setAdditionalQuestion(getAdditionalQuestion());
    context.setAdditionalQuestionAnswer(additionalQuestionAnswer);
    context.setGrantSubmitted(true);

    console.log("Scholarship Amount:", scholarshipAmount);
    console.log("Scholarship Reason:", scholarshipReason);
    console.log("Additional Question:", getAdditionalQuestion());
    console.log("Additional Question Answer:", additionalQuestionAnswer);
  };

  const getAdditionalQuestion = () => {
    switch (scholarshipAmount) {
      case "3000":
        return "Describe a recent project or endeavor where you took the first step towards a significant achievement. How do you plan to apply this initiative-taking attitude to real estate investment?";
      case "5000":
        return "Discuss a situation where you had to overcome obstacles to build something important, be it a project, relationship, or career opportunity. How will these experiences help you manage the complexities of real estate?";
      case "11000":
        return "Provide an example of how you have led a team or project to success. What leadership qualities do you think are essential for successfully running a real estate business, and how do you plan to apply them?";
      default:
        return "";
    }
  };
  if (!context.showGrant) {
    return null;
  }

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
        {context.grantSubmitted ? (
          <>
            {context.grantApproved && (
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
              severity={context.grantApproved ? "success" : "info"}
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: context.grantApproved ? "#e1fac8" : "#d6f8ff",
                mt: 5,
                mb: 3,
                "& .MuiSvgIcon-root": {
                  mt: 0.1,
                },
              }}
            >
              {context.grantApproved ? (
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

              <FormHelperText
                sx={{
                  mb: 1,
                  mt: 2,
                  textAlign: "left",
                  color: "#cfcfcf",
                  width: { xs: "100%", sm: "500px" },
                }}
              >
                Explain the circumstances surrounding your requirement for a
                FlipSystem grant.
              </FormHelperText>
              <TextField
                multiline
                rows={6}
                value={scholarshipReason}
                onChange={(e) => setScholarshipReason(e.target.value)}
                variant="outlined"
                inputProps={{ maxLength: 1000 }}
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

              {scholarshipAmount && (
                <>
                  <FormHelperText
                    sx={{
                      mb: 1,
                      mt: 2,
                      textAlign: "left",
                      color: "#cfcfcf",
                      width: { xs: "100%", sm: "500px" },
                    }}
                  >
                    {getAdditionalQuestion()}
                  </FormHelperText>

                  <TextField
                    multiline
                    rows={6}
                    value={additionalQuestionAnswer}
                    onChange={(e) =>
                      setAdditionalQuestionAnswer(e.target.value)
                    }
                    variant="outlined"
                    inputProps={{ maxLength: 1000 }}
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
                </>
              )}

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#6a1b9a",
                  "&:hover": { backgroundColor: "#4a148c" },
                  color: "#fff",
                  mt: 2,
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
