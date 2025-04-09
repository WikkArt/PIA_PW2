import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/bootstrap.min.css';
import PerfilCSS from './CSS/perfil.module.css'
import './JS/bootstrap.bundle.min.js';
import ModalPostComponent from './Components/Modals/modalPostComponent.jsx';
import PostComponent from './Components/postComponent.jsx';

function PerfilUsuario() {

    const [activeTab, setActiveTab] = useState('posts'); // 'posts' es la tab activa por defecto

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

            <div className={`${PerfilCSS.cuerpo} row`}>
                {/* Modal de Posts */}
                <ModalPostComponent
                    className="modal fade"
                    id="idModalPost"
                    tabIndex="-1"
                    role="dialog"
                    aria-hidden="true"
                ></ModalPostComponent>

                {/* Informacion del usuario */}
                <div className={`${PerfilCSS["perfil-usuario"]} col-4`}>
                    <img id="idAvatarSample" src="Images/Templates/Usuario_blanco.png" 
                    className={PerfilCSS["avatar-pixel-corners"]} alt="Avatar"></img>
                    <h2>Nombre de Usuario</h2>
                    <label id="idCorreo">ejemploCorreo@gmail.com</label>
                    <label>X publicacion(es)</label>
                    <a href="#">
                        <button className={PerfilCSS["boton-pixel-corners"]}>Editar Perfil</button>
                    </a>
                </div>

                <div className={`col ${PerfilCSS["col-der"]}`}>
                    {/* Pestanias */}
                    <ul className="nav nav-tabs" id={PerfilCSS.idTabs}>
                        <li className="nav-item">
                            <button className={`${PerfilCSS["nav-link"]} ${activeTab === 'posts' ? PerfilCSS.active : ''}`}
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
                            <button className={`${PerfilCSS["nav-link"]} ${activeTab === 'listas' ? PerfilCSS.active : ''}`}
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
                            <button className={`${PerfilCSS["nav-link"]} ${activeTab === 'likes' ? PerfilCSS.active : ''}`}
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
                            <button className={`${PerfilCSS["nav-link"]} ${activeTab === 'guardados' ? PerfilCSS.active : ''}`}
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
                            <button className={`${PerfilCSS["nav-link"]} ${activeTab === 'historial' ? PerfilCSS.active : ''}`}
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

                    <div className={PerfilCSS["tab-content"]}>
                        {/* Posts */}
                        {activeTab === 'posts' && (
                            <div className={`${PerfilCSS["tab-pane"]} fade ${activeTab === 'posts' ? 'show active' : ''}`} id="idPosts" role="tabpanel" aria-labelledby="posts-tab">
                                <div className={PerfilCSS["tab-subtitulo"]}>
                                    <h2>Posts creados por ti</h2>
                                    <Link to="/crearPost" className={`${PerfilCSS["agregar-elemento"]} ${PerfilCSS["boton-pixel-corners"]}`}>
                                        +
                                        <button> Nuevo Post</button>
                                    </Link>
                                </div>
                                
                                <div id={PerfilCSS.idTabPost}>
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
                            <div className={`${PerfilCSS["tab-pane"]} fade ${activeTab === 'listas' ? 'show active' : ''}`} id="idListas" role="tabpanel" aria-labelledby="listas-tab">
                                <div className={PerfilCSS["tab-subtitulo"]}>
                                    <h2>Listas</h2>
                                    <a href="#" className={`${PerfilCSS["agregar-elemento"]} ${PerfilCSS["boton-pixel-corners"]}`}>
                                        +
                                        <button> Nueva Lista</button>
                                    </a>
                                </div>

                                <div id={PerfilCSS.idTabListas}>
                                    <div id="idListaG">
                                        <button className="lista-pixel-corners">
                                            <img src="https://i.pinimg.com/736x/15/12/ae/1512aee1518cf7cc17f870e76fd657dc.jpg" className="lista-img-pixel-corners" alt=""></img>
                                            <div>
                                                <h3>Título de la Lista</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus finibus tempor. 
                                                    Vivamus nec nunc dui. Sed vulputate, erat rhoncus tincidunt commodo sem nisi accumsan 
                                                    purus tincidunt maximus. 
                                                </p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Likes */}
                        {activeTab === 'likes' && (
                            <div class={`${PerfilCSS["tab-pane"]} fade ${activeTab === 'likes' ? 'show active' : ''}`} id="idLike" role="tabpanel" aria-labelledby="like-tab">
                                <h2>Tus likes</h2>
                                
                                <div id={PerfilCSS.idTabLike}>
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
                            <div class={`${PerfilCSS["tab-pane"]} fade ${activeTab === 'guardados' ? 'show active' : ''}`} id="idGuardados" role="tabpanel" aria-labelledby="guardados-tab">
                                <h2>Elementos guardados</h2>
                                
                                <div id={PerfilCSS.idTabGuardado}>
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
                            <div class={`${PerfilCSS["tab-pane"]} fade ${activeTab === 'historial' ? 'show active' : ''}`} id="idHistorial" role="tabpanel" aria-labelledby="historial-tab">
                                <h2>Historial</h2>
                                
                                <div id={PerfilCSS.idTabHistorial}>
                                    
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