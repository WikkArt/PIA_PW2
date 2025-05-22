import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <ul id="idNavPixplore" className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <img src="/Images/Logo_DarkMode.png" alt="Logo de PIXPLORE" />
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Inicio
        </Link>
      </li>
      {user ? (
        <>
          <li className="nav-item nav-right">
            <span
              className="nav-link"
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              {user.avatar && (
                <img
                  src={`http://localhost:3001${user.avatar}`}
                  alt="Avatar"
                  style={{ width: 32, height: 32, borderRadius: "50%" }}
                />
              )}
              <Link
                className="nav-link"
                to="/perfilUsuario"
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                {user.nombre}
              </Link>
            </span>
          </li>
          <li className="nav-item nav-right">
            <Link
              className="nav-link"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.reload();
              }}
            >
              Cerrar Sesiòn
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item nav-right">
            <Link className="nav-link" to="/login">
              Iniciar Sesión
            </Link>
          </li>
          <li className="nav-item nav-right">
            <Link className="nav-link" to="/registro">
              Registro
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default Navbar;
