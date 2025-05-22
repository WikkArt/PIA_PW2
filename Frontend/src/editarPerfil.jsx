import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/bootstrap.min.css'
import RegistroCSS from './CSS/registro.module.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mostrarAvatar } from './JS/mostrarAvatar.js'
import InputComponent from './Components/inputComponent'

function EditarPerfil() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [email, setEmail] = useState(user?.email || "");
    const [nombre, setNombre] = useState(user?.nombre || "");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState(user?.avatar || "");
    const navigate = useNavigate();

    const handleAvatarChange = (event) => {
        mostrarAvatar(event, 'idAvatarSample');
        const file = event.target.files[0];
        setAvatar(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let avatarUrl = user.avatar;
            
            if (avatar && avatar !== user.avatar && avatar instanceof File) {
                const formData = new FormData();
                formData.append("avatar", avatar);
                const res = await fetch(`http://localhost:3001/usuarios/avatar/${user.id_usuario}`, {
                    method: "POST",
                    body: formData
                });
                const data = await res.json();
                if (res.ok) {
                    avatarUrl = data.avatar;
                } else {
                    toast.error(data.error || "Error subiendo avatar");
                    return;
                }
            }

            // Actualiza los datos del usuario
            const response = await fetch(`http://localhost:3001/usuarios/editar/${user.id_usuario}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nombre,
                    email,
                    password: password || undefined, 
                    avatar: avatarUrl
                }),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success("Perfil actualizado correctamente");
                localStorage.setItem("user", JSON.stringify(data));
                setTimeout(() => navigate("/perfilUsuario"), 1200);
            } else {
                toast.error(data.error || "Error al actualizar");
            }
        } catch (err) {
            toast.error("Error de conexión");
        }
    };

    return (
        <>
            <ToastContainer position="bottom-right" />
            {/* Navegador */}
            <ul id="idNavPixplore" className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <img src="/Images/Logo_DarkMode.png" alt="Logo de PIXPLORE"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link" to="/login">Iniciar Sesión</Link>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link active" to="/registro">Registro</Link>
                </li>
            </ul>

            {/* Editar Usuario */}
            <form id="idRegistro" className={RegistroCSS.registro} onSubmit={handleSubmit}>
                <div className={`${RegistroCSS.col} ${RegistroCSS["col-izq"]}`}>
                    <img
                        id="idAvatarSample"
                        src={avatar && typeof avatar === "string" ? `http://localhost:3001${avatar}` : "Images/Templates/Usuario_blanco.png"}
                        className={RegistroCSS["avatar-pixel-corners"]}
                        alt="Avatar"
                    />
                    <input
                        className={RegistroCSS["form-control"]}
                        type="file"
                        id="btnAvatar"
                        name="btnAvatar"
                        onChange={handleAvatarChange}
                        accept="image/*"
                    />
                    <div className={RegistroCSS.datos}>
                        <InputComponent
                            label="Fecha de nacimiento"
                            type="date"
                            name="dateBirth"
                            id="dateBirth"
                            className={RegistroCSS["date-birth"]}
                        />
                    </div>
                </div>

                <div className={`${RegistroCSS.col} ${RegistroCSS["col-der"]}`}>
                    <div className={RegistroCSS["regresar-titulo"]}>
                        <Link to="/perfilUsuario" className={`${RegistroCSS["regresar-elemento"]} ${RegistroCSS["boton-pixel-corners"]}`}>
                            <img src="/Images/Icons/Flecha.png" alt="Botón para Regeresar"></img>
                        </Link>
                        <h1>Editar Usuario</h1>
                    </div>

                    <div className={RegistroCSS.datos}>
                        <InputComponent
                            label="Correo Electrónico"
                            type="email"
                            name="txtEmail"
                            id="txtEmail"
                            className={RegistroCSS["cuadro-txt"]}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <InputComponent
                            label="Nombre de Usuario"
                            type="text"
                            name="txtUsername"
                            id="txtUsername"
                            className={RegistroCSS["cuadro-txt"]}
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                        <small className={RegistroCSS["form-text"]}>
                            Debe contener un mínimo de 3 carácteres.
                        </small>
                        <InputComponent
                            label="Contraseña"
                            type="password"
                            name="txtPassword"
                            id="txtPassword"
                            className={RegistroCSS["cuadro-txt"]}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <small className={RegistroCSS["form-text"]}>
                            Debe contener un mínimo de 8 carácteres, una mayúscula,
                            una minúscula, un número y un carácter especial.
                        </small>

                        <button id="btnEditUsuario" type="submit" className={RegistroCSS["boton-pixel-corners"]}>Guardar Cambios</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default EditarPerfil;