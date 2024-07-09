import React from "react";
import { Tooltip } from "@mui/material";

export default function AnimatedCheckmark({ checked, onClick, style }) {
  const totalPathLength = 30; // This is an approximation of the path's length.

  return (
    <Tooltip
      title={checked ? "Mark as NOT complete" : "Mark as complete"}
      placement="auto"
    >
      <svg
        onClick={onClick}
        width="40" // Original size
        height="40" // Original size
        viewBox="0 0 40 40"
        fill="none"
        style={{ cursor: "pointer", transform: "scale(0.9)", ...style }} // Scale to 75%
      >
        <defs>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#bee362", stopOpacity: 1 }} // Slightly more yellowish green
            />
            <stop
              offset="100%"
              style={{ stopColor: "#64c40c", stopOpacity: 1 }} // Dark green
            />
          </linearGradient>
        </defs>
        <circle
          cx="20"
          cy="20"
          r="19" // Circle size
          fill={checked ? "url(#greenGradient)" : "none"} // Gradient when checked
          strokeWidth="2"
        />

        <path
          d="M12 22l6 6 10-16"
          stroke="#458a06"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={totalPathLength}
          strokeDashoffset={checked ? 0 : totalPathLength} // Animate from full length to zero
          style={{
            transition:
              "stroke-dashoffset 0.3s ease-in-out, stroke 0.3s ease-in-out",
          }}
        />
        <path
          d="M12 22l6 6 10-16"
          stroke="#fff"
          strokeWidth="4"
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
          d="M12 22l6 6 10-16" // Adjusted checkmark path for taller right half
          stroke="#cfcfcf" // Always grey
          strokeWidth="6"
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
