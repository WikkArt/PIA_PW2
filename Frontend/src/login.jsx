import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/bootstrap.min.css'
import './CSS/login.css'

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
                <li className="nav-item nav-buscador">
                    <input type="text"></input>
                    <button id="idNavBuscar">
                    <img src="/Images/Icons/Buscar.png" alt="Buscador"></img>
                    </button>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link active" to="/login">Iniciar Sesión</Link>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link" to="/registro">Registro</Link>
                </li>
            </ul>
        </>
    )
}

export default Login