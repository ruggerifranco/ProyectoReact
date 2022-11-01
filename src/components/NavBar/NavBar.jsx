import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">AlegrArte</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" aria-current="page" to="/category/piñatas">Piñatas</Link>
                    <Link className="nav-link" to="/category/guirnaldas">Guirnaldas</Link>
                    <Link className="nav-link" to="/category/rosetas">Rosetas</Link>
                    <Link className="nav-link" to=""><CartWidget/></Link>
                </div>
            </div>
        </div>
    </nav>

  );
}

export default NavBar;


