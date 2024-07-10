import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";

export default function ScholarshipForm() {
  const [scholarshipAmount, setScholarshipAmount] = useState("");
  const [scholarshipReason, setScholarshipReason] = useState("");

  const handleScholarshipSubmit = (event) => {
    event.preventDefault();
    console.log("Scholarship Amount:", scholarshipAmount);
    console.log("Scholarship Reason:", scholarshipReason);
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
          extenuating circumstances who are otherwise unable to get started in
          the program. If this is you, please explain your situation below.{" "}
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
            <MenuItem value="3k">$3k</MenuItem>
            <MenuItem value="7k">$7k</MenuItem>
            <MenuItem value="19k">$19k</MenuItem>
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
      </Paper>
    </Box>
  );
}
