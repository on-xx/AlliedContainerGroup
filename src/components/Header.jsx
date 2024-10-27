import React from "react";
import AlliedLogo from "../img/allied-logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <div id="header">
        <div className="header container">
          <div className="logo-container">
            <Link
              to=""
              style={{ textDecoration: "none" }}
              className={
                location.pathname === "/paginatedTable" ? "active" : ""
              }
            >
              <img src={AlliedLogo} alt="Allied Container Group Logo" />
            </Link>
          </div>
          <div className="nav-container">
            <ul>
              <li>
                <Link
                  to="/todo"
                  style={{ textDecoration: "none" }}
                  className={location.pathname === "/todo" ? "active" : ""}
                >
                  To-do List
                </Link>
              </li>
              <li>
                <Link
                  to="/weatherAPI"
                  style={{ textDecoration: "none" }}
                  className={
                    location.pathname === "/weatherAPI" ? "active" : ""
                  }
                >
                  Weather API
                </Link>
              </li>
              <li>
                <Link
                  to="/paginatedTable"
                  style={{ textDecoration: "none" }}
                  className={
                    location.pathname === "/paginatedTable" ? "active" : ""
                  }
                >
                  Paginated Table
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
