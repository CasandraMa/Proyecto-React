import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/Logo.png';
import '../App.css';

export function Navbar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className= "logo" src={Logo} width="120" height="60" ></img>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navb">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navb">
                    <ul className="navbar-nav  mr-auto">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Sobre Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registro">Registrate</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}