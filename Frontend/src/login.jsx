import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/bootstrap.min.css";
import LoginCSS from "./CSS/login.module.css";
import InputComponent from "./Components/inputComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";

function Login() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, password }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/"); // Redirige al inicio o donde prefieras
      } else {
        toast.error(data.error);
      }
    } catch (err) {
      toast.error("Error de conexión");
    }
  };

  return (
    <>
      <Navbar />

      {/* Login */}
      <div className={LoginCSS.cuerpo}>
        <form id="idLogin" className={LoginCSS.login} onSubmit={handleSubmit}>
          <h1>Inicio de sesión</h1>
          <div>
            <InputComponent
              label="Nombre de Usuario"
              type="text"
              name="nombre"
              id="txtUsername"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <InputComponent
              label="Contraseña"
              type="password"
              name="password"
              id="txtPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            id="btnLogin"
            type="submit"
            className={LoginCSS["boton-pixel-corners"]}
          >
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
