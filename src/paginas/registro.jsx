import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from '../componentes/navbar';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export function Registro() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const usuario = formData.get('usuario');
        const contrasenia = formData.get('contrasenia');
        localStorage.setItem(usuario, contrasenia);
        alert('Usuario registrado con éxito');
        navigate('/login');

    };

    return (
        <div>
            <Navbar />
            <div className="container login mt-12">
                <h1>Regístrate</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="usuario">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            required />
                    </div>


                    <div className="form-group">
                        <label htmlFor="contrasenia">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="contrasenia"
                            name="contrasenia"
                            placeholder="Contraseña"
                            required />
                    </div>
                    <button style={{ marginLeft: '30%', marginTop: '5%'  }} type="submit">Crear Cuenta</button>
                </form>
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
    );
}