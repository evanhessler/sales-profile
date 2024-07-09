import React, { useEffect } from "react";
import Meta from "./../components/Meta";
import CustomAccordion from "./../components/CustomAccordion";
import AccordionGroup from "./../components/AccordionGroup";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
        <Box sx={{ marginTop: 3 }}>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6">What are my next steps?</Typography>
          </Box>
          <Box sx={{ margin: 1 }}>
            <AccordionGroup>
              <CustomAccordion
                title="Complete your Initial Phone Consultation"
                defaultChecked={true}
              >
                <Typography sx={{ fontSize: 16 }}>
                  Complete your Initial Phone Consultation
                </Typography>
              </CustomAccordion>
              <CustomAccordion title="Watch the Following Video">
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
              <CustomAccordion title="Accordion 3">
                <Typography sx={{ fontSize: 16 }}>
                  Content of Accordion 1
                </Typography>
              </CustomAccordion>
            </AccordionGroup>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default IndexPage;
