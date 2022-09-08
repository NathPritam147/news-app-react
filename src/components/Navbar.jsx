import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          // className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {/* {this.props.title} */}
              NewsLive
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              {/* <div
              className={`form-check form-switch text-${
                this.props.mode === "light" ? "dark" : "light"
              }`}>
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onClick={this.props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked">
                Enable Dark Mode
              </label>
            </div> */}
            </div>
          </div>
        </nav>
      </>
    );
  }
}

// // Prop types for the props
// Navbar.propTypes = {
//   title: PropTypes.string,
// };

// // Set default values for the props
// Navbar.defaultProps = {
//   title: "Set title here",
// };
