// CustomAccordion.js
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, Box } from "@mui/material";
import AnimatedCheckmark from "./AnimatedCheckmark"; // Import the animated checkmark

export default function CustomAccordion({
  title,
  children,
  expanded,
  onChange,
}) {
  const [checked, setChecked] = React.useState(false);

  const handleCheck = (event) => {
    event.stopPropagation(); // Prevents the accordion from toggling
    setChecked(!checked);
  };

  const gradient = "linear-gradient(180deg, #A582EF 0%, #532a9a 100%)";

  return (
    <div>
      <Accordion expanded={expanded} onChange={onChange}>
        <AccordionSummary
          aria-controls="panel-content"
          id="panel-header"
          style={{
            background: checked ? gradient : "transparent",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: 5,
            borderRight: checked
              ? `2px solid #A582EF`
              : expanded
              ? "2px solid #6b6b6b"
              : "2px solid transparent",
            borderLeft: checked
              ? `2px solid #A582EF`
              : expanded
              ? "2px solid #6b6b6b"
              : "2px solid transparent",
            borderTop: checked
              ? `2px solid #A582EF`
              : expanded
              ? "2px solid #6b6b6b"
              : "2px solid transparent",
            borderBottom: expanded || !checked ? "none" : `2px solid #A582EF`,
            borderTopRightRadius: "4px",
            borderTopLeftRadius: "4px",
            borderBottomRightRadius: expanded ? 0 : "4px",
            borderBottomLeftRadius: expanded ? 0 : "4px",
          }}
        >
          <Typography sx={{ marginTop: 0.8, fontWeight: "bold" }}>
            {title}
          </Typography>
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              onChange();
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
          <Box flex="1" />
          <Box>
            <IconButton
              onClick={handleCheck}
              size="small"
              style={{ marginRight: "8px" }}
            >
              <AnimatedCheckmark checked={checked} onClick={handleCheck} />
            </IconButton>
          </Box>
        </AccordionSummary>
        <AccordionDetails
          style={{
            borderLeft: checked ? `2px solid #A582EF` : "2px solid #6b6b6b",
            borderRight: checked ? `2px solid #A582EF` : "2px solid #6b6b6b",
            borderBottom: checked ? `2px solid #A582EF` : "2px solid #6b6b6b",
            borderBottomRightRadius: "4px",
            borderBottomLeftRadius: "4px",
            transition: "all 0.3s ease-in-out",
            paddingTop: 20,
          }}
        >
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
