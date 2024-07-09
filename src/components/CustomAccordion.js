import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { IconButton, Box } from "@mui/material";

export default function CustomAccordion() {
  const [checked, setChecked] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleCheck = (event) => {
    event.stopPropagation(); // Prevents the accordion from toggling
    setChecked(!checked);
  };

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Accordion expanded={expanded} onChange={handleToggleExpand}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%", // Ensure the summary takes full width
          }}
        >
          <Box component="span">Accordion 1</Box>
          <Box flex="1" /> {/* This box acts as a spacer */}
          <Box>
            <IconButton
              onClick={handleCheck}
              size="small"
              style={{ color: "#cfcfcf", marginRight: "8px" }}
            >
              <CheckCircleOutlineIcon />
            </IconButton>
            <IconButton
              onClick={(event) => {
                event.stopPropagation();
                handleToggleExpand();
              }}
              size="small"
              style={{
                color: "#cfcfcf",
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          style={{
            backgroundColor: checked ? "green" : "transparent",
            border: checked ? "2px solid green" : "2px solid transparent",
            padding: "16px",
            borderRadius: "4px", // Optional for rounded corners
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
