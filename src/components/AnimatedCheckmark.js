import React from "react";
import { Tooltip } from "@mui/material";

export default function AnimatedCheckmark({ checked, onClick, style }) {
  const totalPathLength = 22; // This is an approximation of the path's length.

  return (
    <Tooltip
      title={checked ? "Mark as NOT complete" : "Mark as complete"}
      placement="auto"
    >
      <svg
        onClick={onClick}
        width="35" // Set desired size
        height="35" // Set desired size
        viewBox="0 0 24 24"
        fill="none"
        style={{ cursor: "pointer", ...style }} // Ensure cursor indicates interactivity
      >
        {/* Animated path that appears to draw the checkmark */}
        <path
          d="M5 13l4 4L19 7"
          stroke={checked ? "#93f760" : "#cfcfcf"} // Bright green when checked, grey when not
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={totalPathLength}
          strokeDashoffset={checked ? 0 : totalPathLength} // Animate from full length to zero
          style={{
            transition:
              "stroke-dashoffset 0.3s ease-in-out, stroke 0.3s ease-in-out",
          }}
        />
        {/* Static path that remains visible at all times */}
        <path
          d="M5 13l4 4L19 7"
          stroke="#cfcfcf" // Always grey
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={totalPathLength} // Length of the path to make it always visible
          style={{
            opacity: checked ? 0 : 1, // Only visible when not checked
          }}
        />
      </svg>
    </Tooltip>
  );
}
