import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();

  return (
    <ul id="idNavPixplore" className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <img src="/Images/Logo_DarkMode.png" alt="Logo de PIXPLORE" />
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={`nav-link${location.pathname === "/" ? " active" : ""}`}
          to="/"
        >
          Inicio
        </Link>
      </li>
      <li className="nav-item nav-buscador">
        <input type="text" placeholder='Buscar...'></input>
        <button id="idNavBuscar">
            <img src="/Images/Icons/Buscar.png" alt="Buscador"></img>
        </button>
      </li>
      {user ? (
        <>
          <li className="nav-item nav-right">
            <Link
              className={`nav-link${
                location.pathname === "/perfilUsuario" ? " active" : ""
              }`}
              to="/perfilUsuario"
            >
              Perfil
            </Link>
          </li>
          <li className="nav-item nav-right">
            <Link
              className="nav-link"
              onClick={() => {
                localStorage.removeItem("user");
                navigate("/login");
              }}
            >
              Cerrar Sesión
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item nav-right">
            <Link
              className={`nav-link${
                location.pathname === "/login" ? " active" : ""
              }`}
              to="/login"
            >
              Iniciar Sesión
            </Link>
          </li>
          <li className="nav-item nav-right">
            <Link
              className={`nav-link${
                location.pathname === "/registro" ? " active" : ""
              }`}
              to="/registro"
            >
              Registro
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default Navbar;
