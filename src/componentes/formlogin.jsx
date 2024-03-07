import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Formlogin() {
    const navigate =  useNavigate();
        const handleSubmit = (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const usuario = formData.get('usuario');
          const contrasenia = formData.get('contrasenia');
            
          const contraseniaGuardada = localStorage.getItem(usuario);
         
          if (contraseniaGuardada === contrasenia) {
            alert('Login exitoso');
            navigate('/');
            // Aquí establecerías el estado de la sesión de usuario
          } else {
            alert('Usuario o contraseña incorrecta');
          }
        };
      
        return (
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
            <button  style={{ marginLeft: '30%', marginTop: '5%'  }} type="submit">Iniciar sesión</button>
          </form>
        );
      }
