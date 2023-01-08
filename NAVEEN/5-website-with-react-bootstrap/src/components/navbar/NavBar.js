import React, { Fragment } from "react";

class NavBar extends React.Component {
  render() {
    return (
      <Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#home">
            Travel Freak
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#packages">
                  Packages
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#reviews">
                  Reviews
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBar;
