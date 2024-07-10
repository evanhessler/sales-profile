import React, { useEffect } from "react";
import Meta from "./../components/Meta";
import CustomAccordion from "./../components/CustomAccordion";
import AccordionGroup from "./../components/AccordionGroup";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

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

  return (
    <>
      <Meta />
      <Container>
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
            <Typography variant="h6">What are my next steps?</Typography>
          </Box>
          <Box sx={{ margin: 1 }}>
            <AccordionGroup>
              <CustomAccordion
                title="Consultation with Whitney"
                defaultChecked={true}
              >
                <Typography sx={{ fontSize: 16, my: 2 }}>
                  Time of Call:{" "}
                  <span style={{ fontWeight: "bold", color: "#fff" }}>
                    July 8th, 12PM EST
                  </span>
                </Typography>
                <Typography sx={{ fontSize: 16, my: 2 }}>
                  Duration:{" "}
                  <span style={{ fontWeight: "bold", color: "#fff" }}>
                    15 Minutes
                  </span>
                </Typography>
                <Typography sx={{ fontSize: 16, my: 2 }}>
                  Meeting Link:{" "}
                  <span style={{ fontWeight: "bold", color: "#fff" }}>
                    We will call you at (480) 784 7360
                  </span>
                </Typography>
                <Typography sx={{ fontSize: 16, my: 2 }}>
                  Meeting Notes:{" "}
                  <span style={{ fontWeight: "bold", color: "#fff" }}>
                    "Hey Evan, it was great meeting with you! Excited to have
                    you go through this page and show your wife. Let me know if
                    I can answer any questions for you. - Whitney"
                  </span>
                </Typography>
              </CustomAccordion>
              <CustomAccordion title="Learn About What We Do">
                <Typography sx={{ fontSize: 16, mb: 2 }}>
                  Please watch the entire video below.
                </Typography>
                <Box>
                  <div
                    className="wistia_responsive_padding"
                    style={{ padding: "56.25% 0 0 0", position: "relative" }}
                  >
                    <div
                      className="wistia_responsive_wrapper"
                      style={{
                        height: "100%",
                        left: 0,
                        position: "absolute",
                        top: 0,
                        width: "100%",
                      }}
                    >
                      <div
                        className="wistia_embed wistia_async_55ladfk95k seo=true videoFoam=true"
                        style={{
                          height: "100%",
                          position: "relative",
                          width: "100%",
                        }}
                      >
                        <div
                          className="wistia_swatch"
                          style={{
                            height: "100%",
                            left: 0,
                            opacity: 0,
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            transition: "opacity 200ms",
                            width: "100%",
                          }}
                        >
                          <img
                            src="https://fast.wistia.com/embed/medias/55ladfk95k/swatch"
                            style={{
                              filter: "blur(5px)",
                              height: "100%",
                              objectFit: "contain",
                              width: "100%",
                            }}
                            alt=""
                            aria-hidden="true"
                            onLoad={(e) => {
                              e.target.style.opacity = 1;
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              </CustomAccordion>
              <CustomAccordion title="Tell us About your Goals"></CustomAccordion>
              <CustomAccordion title="Financial Exercise"></CustomAccordion>
              <CustomAccordion title="Other Decision Makers"></CustomAccordion>
              <CustomAccordion title="Perform Due Diligence"></CustomAccordion>
              <CustomAccordion title="Consultation with Senior Advisor">
                <Tooltip title="Meeting start time is not until July 8th at 12pm EST">
                  <span style={{ cursor: "not-allowed" }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#6a1b9a",
                        "&:hover": { backgroundColor: "#4a148c" },
                        "&.Mui-disabled": {
                          backgroundColor: "#6a1b9a",
                          color: "rgba(255, 255, 255, 0.7)",
                        },
                      }}
                      href="https://zoom.com/meetings.com"
                      disabled
                    >
                      Zoom Meeting Link
                    </Button>
                  </span>
                </Tooltip>

                <Typography sx={{ fontSize: 16, my: 2 }}>
                  Time of Call:{" "}
                  <span style={{ fontWeight: "bold", color: "#fff" }}>
                    July 8th, 12PM EST
                  </span>
                </Typography>
                <Typography sx={{ fontSize: 16, my: 2 }}>
                  Duration:{" "}
                  <span style={{ fontWeight: "bold", color: "#fff" }}>
                    45 Minutes
                  </span>
                </Typography>
                <Typography sx={{ fontSize: 16, my: 2 }}>
                  Meeting Notes:{" "}
                  <span style={{ fontWeight: "bold", color: "#fff" }}>
                    "Hey Evan, it was great meeting with you! Excited to have
                    you go through this page and show your wife. Let me know if
                    I can answer any questions for you. - Whitney"
                  </span>
                </Typography>
              </CustomAccordion>
            </AccordionGroup>
          </Box>
        </Box>
        <Box sx={{ m: 1 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
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
      </Container>
    </>
  );
}

export default IndexPage;
