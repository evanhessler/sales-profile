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
          the program. If this is you, please explain your situation below.
          <span style={{ fontStyle: "italic", color: "#fff" }}>
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
            }}
          >
            <MenuItem value="3k">$3k</MenuItem>
            <MenuItem value="7k">$7k</MenuItem>
            <MenuItem value="19k">$19k</MenuItem>
          </TextField>
          <TextField
            label="Explain why you should qualify"
            multiline
            rows={4}
            value={scholarshipReason}
            onChange={(e) => setScholarshipReason(e.target.value)}
            variant="outlined"
            inputProps={{ maxLength: 500 }}
            sx={{
              mb: 2,
              width: { xs: "100%", sm: "500px" },
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
