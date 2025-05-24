import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/bootstrap.min.css";
import RegistroCSS from "./CSS/registro.module.css";
import "./JS/bootstrap.bundle.min.js";
import "./JS/jquery-3.7.1.min.js";
import { mostrarAvatar } from "./JS/mostrarAvatar.js";
import InputComponent from "./Components/inputComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";

function Registro() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleAvatarChange = (event) => {
    mostrarAvatar(event, "idAvatarSample");
    setAvatar(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("email", email);
    formData.append("password", password);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const response = await fetch("http://localhost:3001/auth/registro", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Usuario registrado correctamente");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        const error = await response.json();
        alert("Error: " + error.error);
      }
    } catch (err) {
      alert("Error de conexión");
    }
  };

  return (
    <>
      {" "}
      <Navbar />
      {/* Registro */}
      <form
        id="idRegistro"
        className={RegistroCSS.registro}
        onSubmit={handleSubmit}
      >
        <div className={`${RegistroCSS.col} ${RegistroCSS["col-izq"]}`}>
          <img
            id="idAvatarSample"
            src="Images/Templates/Usuario_blanco.png"
            className={RegistroCSS["avatar-pixel-corners"]}
            alt="Avatar"
          ></img>

          <input
            className={RegistroCSS["form-control"]}
            type="file"
            id="btnAvatar"
            name="btnAvatar"
            onChange={handleAvatarChange}
            accept="image/*"
          ></input>

         
        </div>

        <div className={`${RegistroCSS.col} ${RegistroCSS["col-der"]}`}>
          <h1>Registro de Usuario</h1>
          <div className={RegistroCSS.datos}>
            <InputComponent
              label="Correo Electrónico"
              type="email"
              name="email"
              id="txtEmail"
              className={RegistroCSS["cuadro-txt"]}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputComponent
              label="Nombre de Usuario"
              type="text"
              name="nombre"
              id="txtUsername"
              className={RegistroCSS["cuadro-txt"]}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <small className={RegistroCSS["form-text"]}>
              Debe contener un mínimo de 3 carácteres.
            </small>
            <InputComponent
              label="Contraseña"
              type="password"
              name="password"
              id="txtPassword"
              className={RegistroCSS["cuadro-txt"]}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small className={RegistroCSS["form-text"]}>
              Debe contener un mínimo de 8 carácteres, una mayúscula, una
              minúscula, un número y un carácter especial.
            </small>

            <button
              id="btnRegistro"
              type="submit"
              className={RegistroCSS["boton-pixel-corners"]}
            >
              Registrar Usuario
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Registro;
