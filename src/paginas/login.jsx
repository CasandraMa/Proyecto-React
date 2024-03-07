import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

import { Link } from 'react-router-dom';
import { Navbar } from '../componentes/navbar'
import { Formlogin } from "../componentes/formlogin"

export function Login() {
    return (
        <div>
            <Navbar />
            <div className="container login mt-12">  
            <h1>Login</h1>
                
                <div className="row">
                    <div className="col-lg-12 mx-auto">
                        <Formlogin />
                        <Link className="nav-link" to="/registro">¿Aún no te has Registrado? Create una Cuenta</Link>
                    </div>
                   
                </div>
            </div>
            <p style={{ color: "#a00e0e" }}>
              En nuestro sitio web, ofrecemos un convertidor de MP3 de YouTube
              que te permite convertir tus videos favoritos de YouTube a
              archivos de audio MP3 de alta calidad. Ya sea que desees escuchar
              música mientras viajas, disfrutar de tus podcasts favoritos o
              simplemente guardar tus canciones preferidas en tu dispositivo,
              nuestro convertidor es la herramienta perfecta para ti.
            </p>
        </div>

    )
}