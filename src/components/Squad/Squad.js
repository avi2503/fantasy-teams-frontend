import React from "react";
import "./Squad.css";

export default function Squad({ selectedTeam }) {
  return (
    <div
      className="card my-2 p-2 sqaudCard"
      style={{ backgroundColor: `${selectedTeam.color}` }}
    >
      <button
        style={{
          backgroundColor: "#E95432" /* Button color */,
          color: "white",
          border: "none",
          padding: "12px 25px",
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "uppercase",
          cursor: "pointer",
          display: "inline-block",
          clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          transition: "background-color 0.3s ease",
        }}
      >
        Match Centre
      </button>
    </div>
  );
}
