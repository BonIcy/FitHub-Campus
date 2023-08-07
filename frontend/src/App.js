import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/home.jsx'; 
import Calories from './pages/calories.jsx';
import LoginForm from './resources/form/loginForm.jsx';
import RegisterForm from './resources/form/registerForm.jsx';
import './resources/css/style.css';

function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(false);

  let handleLogin = async (formData) => {
    try {
      let response = await fetch('http://localhost:5513/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        let data = await response.json();
        console.log('Usuario logueado:', data);
        setIsAuthenticated(true);
  
        localStorage.setItem('token', data.token);
      } else {
        console.log('Error al iniciar sesión:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error en la petición de inicio de sesión:', error);
    }
  };
  

  let handleRegister = async (formData) => {
    try {
      let response = await fetch('http://localhost:5513/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        let data = await response.json();
        console.log('Usuario registrado:', data);
      } else {
        console.log('Error al registrar usuario:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error en la petición de registro:', error);
    }
  };
  let handleLogout = () => {
    setIsAuthenticated(false);
  };

    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/calories">Calcular Calorías</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                  </li>
                </>
              ) : (
                <>
                <ul className="nav-linkss">
                  <li>
                  <Link to="/login" className="btn-linkk">Iniciar sesión</Link>
                  </li>
                  <li>
                  <Link to="/register" className="btn-linkk">Registrarse</Link>
                  </li>
                  </ul>
                </>
              )}
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="/calories"
               element={<Calories isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/login"
              element={<LoginForm onLogin={handleLogin} setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/register" element={<RegisterForm onRegister={handleRegister} />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
