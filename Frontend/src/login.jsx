import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/bootstrap.min.css';
import LoginCSS from './CSS/login.module.css';
import InputComponent from './Components/inputComponent'

function Login() {

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
                    <Link className="nav-link active" to="/login">Iniciar Sesión</Link>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link" to="/registro">Registro</Link>
                </li>
            </ul>

            {/* Login */}
            <div className={LoginCSS.cuerpo}>
                <form action="" id="idLogin" className={LoginCSS.login}>
                    <h1>Inicio de sesión</h1>
                    <div>
                        <InputComponent 
                            label="Nombre de Usuario" 
                            type="text"
                            name="txtUsername"
                            id="txtUsername"
                        />

                        <InputComponent 
                            label="Contraseña" 
                            type="password"
                            name="txtPassword"
                            id="txtPassword"
                        />
                    </div>

                    <button id="btnLogin" type="submit" className={LoginCSS["boton-pixel-corners"]}>Ingresar</button>
                </form>
            </div>
        </>
    )
}

export default Login