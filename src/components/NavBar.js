import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="\">
              News Villa
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="\">
                    Home
                  </Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to = "/about">About Us</Link></li>
                <li className="nav-item"><Link className="nav-link" to = "/general">general</Link></li>
                <li className="nav-item"><Link className="nav-link" to = "/business">business</Link></li>
                <li className="nav-item"><Link className="nav-link" to = "/entertainment">entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to = "/health">health</Link></li>
                <li className="nav-item"><Link className="nav-link" to = "/science">science</Link></li>
                <li className="nav-item"><Link className="nav-link" to = "/sports">sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to = "/technology">technology</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default NavBar;
