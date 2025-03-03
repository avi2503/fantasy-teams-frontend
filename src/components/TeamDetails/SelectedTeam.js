import React from "react";
import "./SelectedTeam.css";
import Squad from "../Squad/Squad";

export default function SelectedTeam({ selectedTeam }) {
  return (
    <div className="selectedTeam">
      <div
        className="teamDetailsSection card"
        style={{ backgroundColor: `${selectedTeam.color}` }}
      >
        <div className="w-25">
          <p>{selectedTeam.team}</p>
          <p>{selectedTeam.description}</p>
          <p>{selectedTeam.titleYears}</p>
        </div>
        <div className="w-75 d-flex flex-column align-items-center">
          <table>
            <tbody>
              <tr>
                <td
                  style={{
                    width: "7rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Captain<span> : </span>
                </td>
                <td style={{ width: "20rem", paddingLeft: "0.5rem" }}>
                  {selectedTeam.captain}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "7rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Coach<span> : </span>
                </td>
                <td style={{ width: "20rem", paddingLeft: "0.5rem" }}>
                  {selectedTeam.coach}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "7rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Owner<span> : </span>
                </td>
                <td style={{ width: "20rem", paddingLeft: "0.5rem" }}>
                  {selectedTeam.owner}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    width: "7rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Home Venue<span> : </span>
                </td>
                <td style={{ width: "20rem", paddingLeft: "0.5rem" }}>
                  {selectedTeam.homeVenue}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Squad selectedTeam={selectedTeam} />
    </div>
  );
}
