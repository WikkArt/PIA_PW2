import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/bootstrap.min.css';
import PerfilAdminCSS from './CSS/perfilAdmin.module.css';
import './JS/bootstrap.bundle.min.js';
import ModalDesacUserComponent from './Components/Modals/modalDesacUserComponent.jsx';
import ModalCrearCateComponent from './Components/Modals/modalCrearCateComponent.jsx';
import ModalEditarCateComponent from './Components/Modals/modalEditarCateComponent.jsx';
import ModalElimCateComponent from './Components/Modals/modalElimCateComponent.jsx';

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

            {/* Modal para Desactivar Usuario */}
            <ModalDesacUserComponent
                className={`modal fade ${PerfilAdminCSS["modal-editar-cate"]}`}
                id="idModalDesacUser"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalDesacUserComponent>
            
            {/* Modal para Crear Categoria */}
            <ModalCrearCateComponent
                className={`modal fade ${PerfilAdminCSS["modal-crear-cate"]}`}
                id="idModalCrearCate"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalCrearCateComponent>

            {/* Modal para Editar Categoria */}
            <ModalEditarCateComponent
                className={`modal fade ${PerfilAdminCSS["modal-editar-cate"]}`}
                id="idModalEditarCate"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalEditarCateComponent>

            {/* Modal para Eliminar Categoria */}
            <ModalElimCateComponent
                className={`modal fade ${PerfilAdminCSS["modal-editar-cate"]}`}
                id="idModalElimCate"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalElimCateComponent>

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
                                                    data-bs-target="#idModalDesacUser">
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
                                    <label className={`${PerfilAdminCSS["agregar-elemento"]} ${PerfilAdminCSS["boton-pixel-corners"]}`}>
                                        + 
                                        <button data-bs-toggle="modal" data-bs-target="#idModalCrearCate">
                                            Agregar Categoría
                                        </button>
                                    </label>
                                </div>

                                <div className={`${PerfilAdminCSS["tab-categorias"]} row`}>
                                    <div className={`${PerfilAdminCSS["cate-fandom"]} col`}>
                                        <h3>Fandoms</h3>
                                        <ul className="list-group">
                                            <li className={`${PerfilAdminCSS["list-group-item"]} ${PerfilAdminCSS["tabla-categorias-pixel-corners"]}`}>
                                                <div className={PerfilAdminCSS["categoria-info"]}>
                                                    <strong>Fandom 1</strong>
                                                    <p>Pixelarts sobre X fandom en específico.</p>
                                                </div>
                                                <span>
                                                    <button className={`${PerfilAdminCSS.btn} ${PerfilAdminCSS["btn-warning"]} ${PerfilAdminCSS["pixel-corners"]}`} data-bs-toggle="modal"
                                                        data-bs-target="#idModalEditarCate">Editar</button>
                                                    <button className={`${PerfilAdminCSS.btn} ${PerfilAdminCSS["btn-danger2"]} ${PerfilAdminCSS["pixel-corners"]}`} data-bs-toggle="modal"
                                                        data-bs-target="#modalDesactivarCategoria">Eliminar</button>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={`${PerfilAdminCSS["cate-original"]} col`}>
                                        <h3>Original</h3>
                                        <ul className="list-group">
                                            <li className={`${PerfilAdminCSS["list-group-item"]} ${PerfilAdminCSS["tabla-categorias-pixel-corners"]}`}>
                                                <div className={PerfilAdminCSS["categoria-info"]}>
                                                    <strong>Original 1</strong>
                                                    <p>Pixelarts acerca de cierto tema muy específico.</p>
                                                </div>
                                                <span>
                                                    <button className={`${PerfilAdminCSS.btn} ${PerfilAdminCSS["btn-warning"]} ${PerfilAdminCSS["pixel-corners"]}`} data-bs-toggle="modal"
                                                        data-bs-target="#idModalEditarCate">Editar</button>
                                                    <button className={`${PerfilAdminCSS.btn} ${PerfilAdminCSS["btn-danger2"]} ${PerfilAdminCSS["pixel-corners"]}`} data-bs-toggle="modal"
                                                        data-bs-target="#idModalElimCate">Eliminar</button>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
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