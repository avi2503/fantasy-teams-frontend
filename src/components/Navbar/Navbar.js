import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../../assets/Navbar/logo.png";

export default function NavBar() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("");

  const handleNavigation = (page) => {
    setActivePage(page);
    navigate(`/${page}`);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img
            src={logo}
            alt="brandLogo"
            style={{
              height: "3rem",
              marginRight: "0.5rem",
            }}
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <div
              className={`nav-item nav-link ${
                activePage === "home" ? "active" : ""
              }`}
              onClick={() => handleNavigation("home")}
            >
              Home
            </div>
            <div
              className={`nav-item nav-link ${
                activePage === "teams" ? "active" : ""
              }`}
              onClick={() => handleNavigation("teams")}
            >
              Teams
            </div>
            <div
              className={`nav-item nav-link ${
                activePage === "matches" ? "active" : ""
              }`}
              onClick={() => handleNavigation("matches")}
            >
              Matches
            </div>
            <div
              className={`nav-item nav-link ${
                activePage === "aboutus" ? "active" : ""
              }`}
              onClick={() => handleNavigation("aboutus")}
            >
              About Us
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
