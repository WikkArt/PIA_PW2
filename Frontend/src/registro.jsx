import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/bootstrap.min.css'
import RegistroCSS from './CSS/registro.module.css'
import './JS/bootstrap.bundle.min.js';
import './JS/jquery-3.7.1.min.js';
import { mostrarAvatar } from './JS/mostrarAvatar.js'
import InputComponent from './Components/inputComponent'

function Registro() {

    return (
        <>
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

            {/* Registro */}
            <form action="" id="idRegistro" className={RegistroCSS.registro}>
                <div className={`${RegistroCSS.col} ${RegistroCSS["col-izq"]}`}>
                    <img id="idAvatarSample" src="Images/Templates/Usuario_blanco.png" 
                    className={RegistroCSS["avatar-pixel-corners"]} alt="Avatar"></img>

                    <input className={RegistroCSS["form-control"]} type="file" id="btnAvatar" name="btnAvatar" 
                    onChange={(event) => mostrarAvatar(event, 'idAvatarSample')} accept="image/*"></input>

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
                    <h1>Registro de Usuario</h1>
                    <div className={RegistroCSS.datos}>
                        <InputComponent 
                            label="Correo Electrónico" 
                            type="email"
                            name="txtEmail"
                            id="txtEmail"
                            className={RegistroCSS["cuadro-txt"]}
                        />
                        <InputComponent 
                            label="Nombre de Usuario" 
                            type="text"
                            name="txtUsername"
                            id="txtUsername"
                            className={RegistroCSS["cuadro-txt"]}
                        />
                        <small className={RegistroCSS["form-text"]}>
                            Debe contener un mínimo de 3 carácteres.
                        </small>
                        <InputComponent 
                            label="Contraseña" 
                            type="text"
                            name="txtPassword"
                            id="txtPassword"
                            className={RegistroCSS["cuadro-txt"]}
                        />
                        <small className={RegistroCSS["form-text"]}>
                            Debe contener un mínimo de 8 carácteres, una mayúscula,
                            una minúscula, un número y un carácter especial.
                        </small>

                        <button id="btnLogin" type="submit" className={RegistroCSS["boton-pixel-corners"]}>Registrar Usuario</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Registro