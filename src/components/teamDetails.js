import React from 'react';
import "./teamDetails.css";
import teamDetailsData from "./teamDetailsData.json";

export default function teamDetails() {
    return (
        <div className="teamDetails">
            <div className="teamRow">
                {teamDetailsData.map((team) => {
                    const imagePath = require(`../assets/teamLogo/${team.image}`);
                    return (
                        <div className="card teamCard" key={team.id}>
                            <img src={imagePath} alt={team.name} style={{ height: "5rem" }} />
                        </div>
                    )
                })}

            </div>
        </div>
    );
}
