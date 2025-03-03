import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Teams from "./components/Teams/Teams";
import Matches from "./components/Matches/Matches";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/teams" element={<Teams />} />
          {/* <Route path="/players" element={<Players />} /> */}
          <Route path="/matches" element={<Matches />} />
          {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          {/* Define other routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
