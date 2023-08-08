import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

let Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
        <nav className="navbar position-relative navbar-expand-lg navbar-dark  w-100 text-decoration-none pt-3 mt-4 container-fluid">
          <div className="container-fluid text-center position-fixed fixed-top" id="nv">
            <a className="navbar-brand" href="#">
            <Link to="http://localhost:3000/"> <img
            src="https://vignette.wikia.nocookie.net/doblaje/images/5/54/Baki_Hanma_(Baki).png/revision/latest/zoom-crop/width/320/height/320?cb=20181002225850&path-prefix=es"
            alt="Imagen de Baki Hanma"
            width="120"
            height="70"
            className="d-inline-block align-text-center"
          /></Link> 
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-start" id="navbarav">
              <ul className="navbar-nav">
                <li className="nav-item p-3 p-lg-0">
                <Link to="http://localhost:3000/" className="nav-link">Rutinas</Link>
                </li>
                <li className="nav-item p-3 p-lg-0">
                <Link to="/calories" className="nav-link">Calorias</Link>
                </li>
                <li className="nav-item p-3 p-lg-0">
                <Link to="http://localhost:3000/" className="nav-link">Maquinas</Link>
                </li>
                <li className="nav-item p-3 p-lg-0">
                <Link to="http://localhost:3000/" className="nav-link">Suplementos</Link>
                </li>
                <li className="nav-item p-3 p-lg-0">
                <Link to="http://localhost:3000/" className="nav-link">Comunidad</Link>
                </li>
              </ul>
            </div>
          </div>
          {isAuthenticated ? (
        <div>
              <button onClick={handleLogout} className="auth-button">Cerrar sesión</button>
            </div>
          ) : (
            <div>
              <Link to="/login" className="auth-link">Iniciar sesión</Link>
              <Link to="/register" className="auth-link">Registrarse</Link>
            </div>
          )}
        </nav>
  );
};

export default Navbar;
