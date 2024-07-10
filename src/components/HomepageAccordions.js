import CustomAccordion from "./CustomAccordion";
import AccordionGroup from "./AccordionGroup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

export default function HomepageAccordions({}) {
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

  return (
    <Box sx={{ m: 1, mt: 3 }}>
      <Typography
        variant="h6"
        textAlign={{ xs: "center", md: "left" }}
        sx={{ mb: 1 }}
      >
        What are my next steps?
      </Typography>
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
              "Hey Evan, it was great meeting with you! Excited to have you go
              through this page and show your wife. Let me know if I can answer
              any questions for you. - Whitney"
            </span>
          </Typography>
        </CustomAccordion>
        <CustomAccordion title="Learn About What We Do">
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
              "Hey Evan, it was great meeting with you! Excited to have you go
              through this page and show your wife. Let me know if I can answer
              any questions for you. - Whitney"
            </span>
          </Typography>
        </CustomAccordion>
      </AccordionGroup>
    </Box>
  );
}
