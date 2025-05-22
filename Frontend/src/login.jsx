import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/bootstrap.min.css';
import LoginCSS from './CSS/login.module.css';
import InputComponent from './Components/inputComponent';

function Login() {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, password })
            });
            const data = await response.json();
            if (data.success) {
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/'); // Redirige al inicio o donde prefieras
            } else {
                alert(data.error);
            }
        } catch (err) {
            alert('Error de conexión');
        }
    };

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
                <form id="idLogin" className={LoginCSS.login} onSubmit={handleSubmit}>
                    <h1>Inicio de sesión</h1>
                    <div>
                        <InputComponent 
                            label="Nombre de Usuario" 
                            type="text"
                            name="nombre"
                            id="txtUsername"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />

                        <InputComponent 
                            label="Contraseña" 
                            type="password"
                            name="password"
                            id="txtPassword"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <button id="btnLogin" type="submit" className={LoginCSS["boton-pixel-corners"]}>Ingresar</button>
                </form>
            </div>
        </>
    )
}

export default Login;