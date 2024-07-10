import React, { useEffect, useState } from "react";
import Meta from "./../components/Meta";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import HomepageAccordions from "../components/HomepageAccordions";

function IndexPage(props) {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/embed/medias/55ladfk95k.jsonp";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const advisors = [
    {
      name: "Whitney Smith",
      email: "whitney@example.com",
      phone: "(480) 784-7360",
      avatar:
        "https://ca.slack-edge.com/T04HXDV7TR8-U058ZG5QTQU-d39942833aeb-72",
      description:
        "Whitney has over 10 years of experience in real estate investment and client advisory. She is passionate about helping clients achieve their financial goals. Whitney enjoys hiking and spending time with her family.",
    },
    {
      name: "Senior Advisor",
      email: "senioradvisor@example.com",
      phone: "(480) 123-4567",
      avatar: "",
      description:
        "Our Senior Advisor brings a wealth of knowledge in financial planning and investment strategies. With a background in corporate finance, they provide invaluable insights to our clients. In their spare time, they love reading and gardening.",
    },
  ];

  const [scholarshipAmount, setScholarshipAmount] = useState("");
  const [scholarshipReason, setScholarshipReason] = useState("");

  const handleScholarshipSubmit = (event) => {
    event.preventDefault();
    // Handle the scholarship application submission here
    console.log("Scholarship Amount:", scholarshipAmount);
    console.log("Scholarship Reason:", scholarshipReason);
  };

  return (
    <>
      <Meta />
      <Container sx={{ mb: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
              accumulating wealth with real estate. You are here because you
              need to make an informed decision on investing your time and
              money. Use this page to see if investing with FlipSystem is right
              for you.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ my: 3 }}>
          <Box sx={{ margin: 1 }}>
            <Typography
              variant="h6"
              textAlign={{ xs: "center", md: "left" }}
              sx={{ mb: 1 }}
            >
              What are my next steps?
            </Typography>
          </Box>
          <Box sx={{ margin: 1 }}>
            <HomepageAccordions />
          </Box>
        </Box>
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
              extenuating circumstances who are otherwise unable to get started
              in the program. If this is you, please explain your situation
              below.{" "}
              <span
                style={{
                  fontStyle: "italic",
                  color: "#fff",
                }}
              >
                Note: Grants are highly competitive. An application submission
                is not a guaranteed approval.
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
      </Container>
    </>
  );
}

export default IndexPage;
