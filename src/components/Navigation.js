import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Jon Langerman
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
            <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  About
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/Projects" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/Projects">
                  Projects
                  
                </Link>
              </li>
            
              <li
                className={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/ressume" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);