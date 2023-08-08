import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';
let LoginForm = ({ onLogin, setIsAuthenticated }) => {
    let navigate = useNavigate();
  
    let [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    let handleChange = (event) => {
      let { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await onLogin(formData);
          setIsAuthenticated(true); 
          navigate('/'); 
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
        }
      };
      
  
    return (
      <div className="center-container">
      <form onSubmit={handleSubmit} class="container">
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