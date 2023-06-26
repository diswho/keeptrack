import React from "react";
import "./App.css";
import ProjectsPage from "./projects/ProjectsPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
// test

function App() {
  return (
    <Router>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>
      <div className="App">
        <ProjectsPage />
      </div>
    </Router>
  );
}

export default App;
