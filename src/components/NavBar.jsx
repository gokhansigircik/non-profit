import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" style={{ color: "black" }} to="/"><h1>
              Mateus Palace</h1>
            </Link>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse" id="navbarCollapse"> */}
              <div>
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "black" }}
                    to="/donate"
                  >
                    <button
                      style={{
                        backgroundColor: "#c8102e",
                        borderradius: 5,
                        borderwidth: 3,
                        color: "white",
                        width: 90,
                        border: "#c8102e",
                        padding: 4,
                        borderRadius: 2

                      }}
                    >
                      Donate
                    </button>
                  </Link>
                </li>
                {/* <li className="nav-item">
                <Link className="nav-link" to="#">
                  Link
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled">Disabled</Link>
              </li> */}
              </ul>
              {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
