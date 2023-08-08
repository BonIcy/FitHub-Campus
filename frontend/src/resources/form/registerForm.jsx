import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/register.css';
let RegisterForm = ({ onRegister, setIsAuthenticated }) => {
  let navigate = useNavigate(); 

  let [formData, setFormData] = useState({
    username: '',
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
      await onRegister(formData);
      setIsAuthenticated(true); 
      navigate('http://localhost:3000/login'); 
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div className="center-container">
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
