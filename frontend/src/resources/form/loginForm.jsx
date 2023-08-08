import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';
// Formulario de inicio de sesión
let LoginForm = ({ onLogin, setIsAuthenticated }) => {
    let navigate = useNavigate();
    // Status para almacenar los datos del form
    let [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    // Funcion de cambio de datos del formulario
    let handleChange = (event) => {
      let { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
   // funcion para enviar el formulario al intentar iniciar sesión
    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Llamamos a la función onLogin pasando los datos del formulario (email y pw)
          await onLogin(formData);
          // Establecemos la autenticación como true (obviamente si los datos son validos) y redirigimos a la página principal
          setIsAuthenticated(true); 
          navigate('/'); 
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
        }
      };
      
  
    return (
      <div className="center-container">
      <form onSubmit={handleSubmit} class="container">
      {/* Formulario de inicio de sesión y entradas para datos (email y password) */}
        <div>
           
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      </div>
    );
  };
  
  export default LoginForm;