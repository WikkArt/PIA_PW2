import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/bootstrap.min.css';
import PerfilAdminCSS from './CSS/perfilAdmin.module.css';
import './JS/bootstrap.bundle.min.js';

function PerfilAdmin() {
    
    // 'usuarios' es la tab activa por defecto
    const [activeTab, setActiveTab] = useState('usuarios');

    // Función para cambiar las pestañas
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
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
                    <Link className="nav-link active" to="/perfilAdmin">Perfil</Link>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link" to="/login">Cerrar Sesión</Link>
                </li>
            </ul>

            {/* Perfil del Administrador */}

            <div className={PerfilAdminCSS.cuerpo}>
                <h1>Administrador</h1>

                <div className={PerfilAdminCSS["tabs-container"]}>
                    {/* Pestanias */}
                    <ul className="nav nav-tabs" id={PerfilAdminCSS.adminTabs}>
                        <li className="nav-item">
                            <button className={`${PerfilAdminCSS["nav-link"]} ${activeTab === 'usuarios' ? PerfilAdminCSS.active : ''}`}
                                onClick={() => handleTabChange('usuarios')}
                                id="usuarios-tab" 
                                databstoggle="tab" 
                                databstarget="#idUsuarios" 
                                type="button" role="tab" 
                                aria-controls="idUsuarios" 
                                aria-selected="true">
                                Usuarios
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={`${PerfilAdminCSS["nav-link"]} ${activeTab === 'categorias' ? PerfilAdminCSS.active : ''}`}
                                onClick={() => handleTabChange('categorias')}
                                id="categorias-tab" 
                                databstoggle="tab" 
                                databstarget="#idCategorias" 
                                type="button" role="tab" 
                                aria-controls="idCategorias" 
                                aria-selected="false">
                                Categorias
                            </button>
                        </li>
                    </ul>

                    {/* Contenido */}
                    <div className={PerfilAdminCSS["tab-content"]}>
                        {/* Usuarios */}
                        {activeTab === 'usuarios' && (
                            <div className={`${PerfilAdminCSS["tab-pane"]} fade ${activeTab === 'usuarios' ? 'show active' : ''}`} id="idUsuarios" role="tabpanel" aria-labelledby="usuarios-tab">
                                <h2>Gestión de Usuarios</h2>

                                <div id={PerfilAdminCSS.idTabUsuarios}>
                                    <table className={`${PerfilAdminCSS.table} ${PerfilAdminCSS["pixel-corners"]}`}>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nombre</th>
                                                <th>Email</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Juan Pérez</td>
                                                <td>juan@example.com</td>
                                                <td>
                                                    <button className={`${PerfilAdminCSS.btn} ${PerfilAdminCSS["btn-danger"]} ${PerfilAdminCSS["pixel-corners"]}`} data-bs-toggle="modal"
                                                    data-bs-target="#modalDesactivarUsuario">
                                                        Inactivar
                                                    </button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                
                                
                            </div>
                        )}
                        
                        {/* Categorias */}
                        {activeTab === 'categorias' && (
                            <div className={`${PerfilAdminCSS["tab-pane"]} fade ${activeTab === 'categorias' ? 'show active' : ''}`} id="idCategorias" role="tabpanel" aria-labelledby="categorias-tab">
                                <div className={PerfilAdminCSS["tab-subtitulo"]}>
                                    <h2>Gestión de Categorías</h2>
                                    <a href="#" className={`${PerfilAdminCSS["agregar-elemento"]} ${PerfilAdminCSS["boton-pixel-corners"]}`}>
                                        +
                                        <button data-bs-toggle="modal" data-bs-target="#modalAgregarCategoria">
                                            Agregar Categoría
                                        </button>
                                    </a>
                                </div>

                                <div id={PerfilAdminCSS.idTabCategorias}>
                                    <ul className={PerfilAdminCSS["list-group"]}>
                                        <li className={`${PerfilAdminCSS["list-group-item"]} ${PerfilAdminCSS["pixel-corners"]}`}>
                                            <div className={PerfilAdminCSS["categoria-info"]}>
                                                <strong className="categoria-titulo">Tecnología</strong>
                                                <p className="categoria-descripcion">Novedades y avances en el mundo tecnológico.</p>
                                            </div>
                                            <span>
                                                <button className="btn btn-warning pixel-corners" data-bs-toggle="modal"
                                                    data-bs-target="#modalEditarCategoria">Editar</button>
                                                <button className="btn btn-danger2 pixel-corners" data-bs-toggle="modal"
                                                    data-bs-target="#modalDesactivarCategoria">Eliminar</button>
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default PerfilAdmin