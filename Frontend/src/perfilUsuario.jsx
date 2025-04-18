import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/bootstrap.min.css';
import PerfilUsuarioCSS from './CSS/perfilUsuario.module.css'
import './JS/bootstrap.bundle.min.js';
import ModalDesacUserComponent from './Components/Modals/modalDesacUserComponent.jsx';
import ModalPostComponent from './Components/Modals/modalPostComponent.jsx';
import ModalCrearListaComponent from './Components/Modals/modalCrearListaComponent.jsx';
import ModalListaComponent from './Components/Modals/modalListaComponent.jsx';
import PostComponent from './Components/postComponent.jsx';
import ListaGComponent from './Components/listaGComponent.jsx';

function PerfilUsuario() {

    // 'posts' es la tab activa por defecto
    const [activeTab, setActiveTab] = useState('posts');

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
                    <Link className="nav-link active" to="/perfilUsuario">Perfil</Link>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link" to="/login">Cerrar Sesión</Link>
                </li>
            </ul>

            {/* Modal para Desactivar Usuario */}
            <ModalDesacUserComponent
                className={`modal fade ${PerfilUsuarioCSS["modal-editar-cate"]}`}
                id="idModalDesacUser"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalDesacUserComponent>

            {/* Modal de Posts */}
            <ModalPostComponent
                className="modal fade"
                id="idModalPost"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalPostComponent>

            {/* Modal para Crear Listas */}
            <ModalCrearListaComponent
                className="modal fade"
                id="idModalCrearLista"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalCrearListaComponent>

            {/* Modal de Listas */}
            <ModalListaComponent
                className="modal fade"
                id="idModalLista"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalListaComponent>

            {/* Perfil del Usuario */}
            <div className={`${PerfilUsuarioCSS.cuerpo} row`}>
                {/* Informacion del usuario */}
                <div className={`${PerfilUsuarioCSS["perfil-usuario"]} col-4`}>
                    <img id="idAvatarSample" src="Images/Templates/Usuario_blanco.png" 
                    className={PerfilUsuarioCSS["avatar-pixel-corners"]} alt="Avatar"></img>
                    <h2>Nombre de Usuario</h2>
                    <label id="idCorreo">ejemploCorreo@gmail.com</label>
                    <label>X publicacion(es)</label>
                    <Link to="/editarPerfil">
                        <button className={PerfilUsuarioCSS["boton-pixel-corners"]}>Editar Perfil</button>
                    </Link>
                    <button className={`${PerfilUsuarioCSS["dropdown-pixel-corners"]} ${PerfilUsuarioCSS["btn-eliminar"]}`} data-bs-toggle="modal" data-bs-target="#idModalDesacUser">
                        Desactivar cuenta
                    </button>
                </div>

                <div className={`col ${PerfilUsuarioCSS["col-der"]}`}>
                    {/* Pestanias */}
                    <ul className="nav nav-tabs" id={PerfilUsuarioCSS.idTabs}>
                        <li className="nav-item">
                            <button className={`${PerfilUsuarioCSS["nav-link"]} ${activeTab === 'posts' ? PerfilUsuarioCSS.active : ''}`}
                                onClick={() => handleTabChange('posts')}
                                id="posts-tab" 
                                databstoggle="tab" 
                                databstarget="#idPosts" 
                                type="button" role="tab" 
                                aria-controls="idPosts" 
                                aria-selected="true">
                                Posts
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={`${PerfilUsuarioCSS["nav-link"]} ${activeTab === 'listas' ? PerfilUsuarioCSS.active : ''}`}
                                onClick={() => handleTabChange('listas')}
                                id="listas-tab" 
                                databstoggle="tab" 
                                databstarget="#idListas" 
                                type="button" role="tab" 
                                aria-controls="idListas" 
                                aria-selected="false">
                                Listas
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={`${PerfilUsuarioCSS["nav-link"]} ${activeTab === 'likes' ? PerfilUsuarioCSS.active : ''}`}
                                onClick={() => handleTabChange('likes')}
                                id="like-tab" 
                                databstoggle="tab" 
                                databstarget="#idLike" 
                                type="button" role="tab" 
                                aria-controls="idLike" 
                                aria-selected="false">
                                Likes
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={`${PerfilUsuarioCSS["nav-link"]} ${activeTab === 'guardados' ? PerfilUsuarioCSS.active : ''}`}
                                onClick={() => handleTabChange('guardados')}
                                id="guardados-tab" 
                                databstoggle="tab" 
                                databstarget="#idGuardados" 
                                type="button" role="tab" 
                                aria-controls="idGuardados" 
                                aria-selected="false">
                                Guardados
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={`${PerfilUsuarioCSS["nav-link"]} ${activeTab === 'historial' ? PerfilUsuarioCSS.active : ''}`}
                                onClick={() => handleTabChange('historial')}
                                id="historial-tab" 
                                databstoggle="tab" 
                                databstarget="#idHistorial" 
                                type="button" role="tab" 
                                aria-controls="idHistorial" 
                                aria-selected="false">
                                Historial
                            </button>
                        </li>
                    </ul>

                    <div className={PerfilUsuarioCSS["tab-content"]}>
                        {/* Posts */}
                        {activeTab === 'posts' && (
                            <div className={`${PerfilUsuarioCSS["tab-pane"]} fade ${activeTab === 'posts' ? 'show active' : ''}`} id="idPosts" role="tabpanel" aria-labelledby="posts-tab">
                                <div className={PerfilUsuarioCSS["tab-subtitulo"]}>
                                    <h2>Posts creados por ti</h2>
                                    <Link to="/crearPost" className={`${PerfilUsuarioCSS["agregar-elemento"]} ${PerfilUsuarioCSS["boton-pixel-corners"]}`}>
                                        +
                                        <button> Nuevo Post</button>
                                    </Link>
                                </div>
                                
                                <div id={PerfilUsuarioCSS.idTabPost}>
                                    <PostComponent
                                        id="idPost"
                                        dataBsToggle="modal"
                                        dataBsTarget="#idModalPost"
                                    ></PostComponent>
                                </div>
                            </div>
                        )}

                        {/* Listas */}
                        {activeTab === 'listas' && (
                            <div className={`${PerfilUsuarioCSS["tab-pane"]} fade ${activeTab === 'listas' ? 'show active' : ''}`} id="idListas" role="tabpanel" aria-labelledby="listas-tab">
                                <div className={PerfilUsuarioCSS["tab-subtitulo"]}>
                                    <h2>Tus Listas</h2>
                                    <label className={`${PerfilUsuarioCSS["agregar-elemento"]} ${PerfilUsuarioCSS["boton-pixel-corners"]}`}>
                                        +
                                        <button data-bs-toggle="modal" data-bs-target="#idModalCrearLista">
                                            Nueva Lista
                                        </button>
                                    </label>
                                </div>

                                <div id={PerfilUsuarioCSS.idTabListas}>
                                    <ListaGComponent
                                        id="idListaG"
                                        dataBsToggle="modal"
                                        dataBsTarget="#idModalLista"
                                    ></ListaGComponent>
                                </div>
                            </div>
                        )}

                        {/* Likes */}
                        {activeTab === 'likes' && (
                            <div className={`${PerfilUsuarioCSS["tab-pane"]} fade ${activeTab === 'likes' ? 'show active' : ''}`} id="idLike" role="tabpanel" aria-labelledby="like-tab">
                                <h2>Tus likes</h2>
                                
                                <div id={PerfilUsuarioCSS.idTabLike}>
                                    <PostComponent
                                        id="idLike"
                                        dataBsToggle="modal"
                                        dataBsTarget="#idModalPost"
                                    ></PostComponent>
                                </div>
                            </div>
                        )}

                        {/* Guardados */}
                        {activeTab === 'guardados' && (
                            <div className={`${PerfilUsuarioCSS["tab-pane"]} fade ${activeTab === 'guardados' ? 'show active' : ''}`} id="idGuardados" role="tabpanel" aria-labelledby="guardados-tab">
                                <h2>Elementos guardados</h2>
                                
                                <div id={PerfilUsuarioCSS.idTabGuardado}>
                                    <PostComponent
                                        id="idGuardado"
                                        dataBsToggle="modal"
                                        dataBsTarget="#idModalPost"
                                    ></PostComponent>
                                </div>
                            </div>
                        )}

                        {/* Historial */}
                        {activeTab === 'historial' && (
                            <div className={`${PerfilUsuarioCSS["tab-pane"]} fade ${activeTab === 'historial' ? 'show active' : ''}`} id="idHistorial" role="tabpanel" aria-labelledby="historial-tab">
                                <h2>Historial</h2>
                                
                                <div id={PerfilUsuarioCSS.idTabHistorial}>
                                    <table className={`${PerfilUsuarioCSS.table} ${PerfilUsuarioCSS["table-pixel-corners"]}`}>
                                        <thead>
                                            <tr>
                                                <th>Post</th>
                                                <th>Título</th>
                                                <th>Hecho por</th>
                                                <th>Fecha Vista</th>
                                                <th>Hora Vista</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="/Images/Templates/Post_16-9.png" alt="Imagen del Post"></img>
                                                </td>
                                                <td id={PerfilUsuarioCSS.id1stTD}>Título de la imagen</td>
                                                <td id={PerfilUsuarioCSS.id2ndTD}>Nombre de Usuario</td>
                                                <td>DD/MM/AAAA</td>
                                                <td>00:00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerfilUsuario