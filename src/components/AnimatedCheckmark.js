import React from "react";
import { Tooltip } from "@mui/material";

export default function AnimatedCheckmark({ checked, onClick, style }) {
  const totalPathLength = 30; // This is an approximation of the path's length.

  return (
    <Tooltip
      title={checked ? "Mark as Incomplete" : "Mark as Complete"}
      placement="auto"
    >
      <svg
        onClick={onClick}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        style={{ cursor: "pointer", transform: "scale(0.9)", ...style }}
      >
        <circle
          cx="20"
          cy="20"
          r="19"
          fill={checked ? "#e1fac8" : "none"} // Static pale green background when checked
          strokeWidth="2"
        />
        <path
          d="M12 22l6 6 10-16"
          stroke={checked ? "#408941" : "none"} // Dark green checkmark color when checked
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={totalPathLength}
          strokeDashoffset={checked ? 0 : totalPathLength}
          style={{
            transition:
              "stroke-dashoffset 0.3s ease-in-out, stroke 0.3s ease-in-out",
          }}
        />
        <path
          d="M12 22l6 6 10-16"
          stroke="#cfcfcf"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={totalPathLength}
          style={{
            opacity: checked ? 0 : 1,
          }}
        />
      </svg>
    </Tooltip>
  );
}
