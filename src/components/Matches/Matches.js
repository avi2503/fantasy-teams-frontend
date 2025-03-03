import React from "react";
import matchData from "./Matches.json";
import "./Matches.css";

const MatchSchedule = () => {
  return (
    <div className="match-container">
      {matchData.map((match, index) => (
        <div key={match.id} className="match-card">
          {/* Match Number and Date */}
          <div className="match-header">
            <span className="match-number">MATCH {index + 1}</span>
            <span className="match-date">{match.date}</span>
          </div>

          {/* Match Time & Stadium */}
          <div className="match-info">
            <span>
              🕒 {match.time} | 📍 {match.stadium}
            </span>
          </div>

          {/* Teams */}
          <div className="teams-container">
            <div className="team">
              <img
                src={require(`../../assets/teamLogo/${match.team1.logo}`)}
                alt={match.team1.name}
              />
              <span>{match.team1.name}</span>
            </div>
            <span className="vs-text">VS</span>
            <div className="team">
              <span>{match.team2.name}</span>
              <img
                src={require(`../../assets/teamLogo/${match.team2.logo}`)}
                alt={match.team2.name}
              />
            </div>
          </div>

          <div className="matchesFooter">
            <h6>KKR won by 28 runs.</h6>
            <div className="button-container">
              <button className="match-centre-btn">Match Centre</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchSchedule;
