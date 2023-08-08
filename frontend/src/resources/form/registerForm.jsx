import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/register.css';
// Formulario de registro
let RegisterForm = ({ onRegister, setIsAuthenticated }) => {
  let navigate = useNavigate(); 
    // estado para almacenar los datos del registro
  let [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
// Funcion de cambio de datos del formulario (la voy a usar varias veces jaja)
  let handleChange = (event) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
 // funcion para enviar el formulario al registrarse
  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
         // Llamamos a la función onRegister (puesta en el parametro de RegisterForm) pasando los datos del formulario
      await onRegister(formData);
       // Ponemos la autenticación como true y redirigimos a la página de login
      setIsAuthenticated(true); 
      navigate('http://localhost:3000/login'); 
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div className="center-container">
    {/* Formulario de registro y entradas para datos (email, user y password) */}
    <form onSubmit={handleSubmit} className='container'>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
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
      <button type="submit">Registrar</button>
    </form>
    </div>
  );
};

export default RegisterForm;
