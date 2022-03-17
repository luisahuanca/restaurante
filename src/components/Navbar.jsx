import React from "react";
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid m-4">
          <Link className="navbar-brand" to="/">
          <img src="https://cdn-icons-png.flaticon.com/512/1046/1046799.png" width={100} height={100} className="d-inline-block align-top" alt="" />
        
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link text-light" to='/home'>
                Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-light" to='/menu'>
                Menu
                </Link>
              </li>
              <li className="nav-item mr-4">
                <Link className="nav-link text-light" to='/reservas'>
                Reservas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

