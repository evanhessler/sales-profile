import React from "react";
import Meta from "./../components/Meta";
import CustomAccordion from "./../components/CustomAccordion";
import AccordionGroup from "./../components/AccordionGroup";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function IndexPage(props) {
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
              accumulating wealth with real estate. Choosing where to invest
              your time and money is an important decision. Use this page to see
              if investing with FlipSystem is right for you.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6">What are my next steps?</Typography>
          </Box>
          <Box sx={{ margin: 1 }}>
            <AccordionGroup>
              <CustomAccordion title="Accordion 1">
                <Typography sx={{ fontSize: 16 }}>
                  Content of Accordion 1
                </Typography>
              </CustomAccordion>
              <CustomAccordion title="Accordion 2">
                <Typography sx={{ fontSize: 16 }}>
                  Content of Accordion 1
                </Typography>
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
