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
  defaultChecked,
}) {
  const [checked, setChecked] = React.useState(defaultChecked || false);

  const handleCheck = (event) => {
    event.stopPropagation(); // Prevents the accordion from toggling
    setChecked(!checked);
  };

  return (
    <div>
      <Accordion expanded={expanded} onChange={onChange}>
        <AccordionSummary
          aria-controls="panel-content"
          id="panel-header"
          style={{
            background: "transparent",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: 5,
            borderRight: expanded
              ? "2px solid #6b6b6b"
              : "2px solid transparent",
            borderLeft: expanded
              ? "2px solid #6b6b6b"
              : "2px solid transparent",
            borderTop: expanded ? "2px solid #6b6b6b" : "2px solid transparent",
            borderBottom: expanded ? "none" : "2px solid transparent",
            borderTopRightRadius: "4px",
            borderTopLeftRadius: "4px",
            borderBottomRightRadius: expanded ? 0 : "4px",
            borderBottomLeftRadius: expanded ? 0 : "4px",
          }}
        >
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
          <Typography sx={{ marginTop: 1.6, fontWeight: "bold" }}>
            {title}
          </Typography>

          <Box flex="1" />
          <IconButton onClick={handleCheck} style={{ marginRight: "8px" }}>
            <AnimatedCheckmark checked={checked} onClick={handleCheck} />
          </IconButton>
        </AccordionSummary>
        <AccordionDetails
          style={{
            borderLeft: "2px solid #6b6b6b",
            borderRight: "2px solid #6b6b6b",
            borderBottom: "2px solid #6b6b6b",
            borderBottomRightRadius: "4px",
            borderBottomLeftRadius: "4px",
            transition: "all 0.3s ease-in-out",
            paddingTop: 20,
            paddingBottom: 40,
          }}
        >
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
