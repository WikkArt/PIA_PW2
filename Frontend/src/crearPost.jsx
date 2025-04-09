import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/bootstrap.min.css';
import CrearPostCSS from './CSS/crearPost.module.css';
import './JS/bootstrap.bundle.min.js';
import { mostrarAvatar } from './JS/mostrarAvatar.js'
import InputComponent from './Components/inputComponent.jsx';

function CrearPost() {
    
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
                    <Link className="nav-link" to="/perfilUsuario">Perfil</Link>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link" to="/login">Cerrar Sesión</Link>
                </li>
            </ul>

            {/* Crear Post */}
            <form action="" id="idCrearPost" className={CrearPostCSS["crear-post"]}>
                <div className={`${CrearPostCSS.col} ${CrearPostCSS["col-izq"]}`}>
                    <img id="idPostSample" src="/Images/Templates/Post_Gray_16-9.png" 
                    className={CrearPostCSS["crear-post-pixel-corners"]} alt="Avatar"></img>

                    <input className={CrearPostCSS["form-control"]} type="file" id="btnAvatar" name="btnAvatar" 
                    onChange={(event) => mostrarAvatar(event, 'idPostSample')} accept="image/*"></input>
                </div>
                
                <div className={`${CrearPostCSS.col} ${CrearPostCSS["col-der"]}`}>
                    <div className={CrearPostCSS["regresar-titulo"]}>
                        <Link to="/perfilUsuario" className={`${CrearPostCSS["regresar-elemento"]} ${CrearPostCSS["boton-pixel-corners"]}`}>
                            <img src="/Images/Icons/Flecha.png" alt="Botón para Regeresar"></img>
                        </Link>
                        <h1>Nueva Publicación</h1>
                    </div>

                    <div className={CrearPostCSS.datos}>
                        
                        <div className={CrearPostCSS.categorias}>
                            <div className="cate-1">
                                <label>Categoría</label>
                                <select id="idCate1" className="form-control">
                                    <option value="0">Selecciona alguna de las opciones...</option>
                                    <option value="Fandom">Fandom</option>
                                    <option value="Original">Original</option>
                                </select>
                            </div>
                            <div className="cate-2">
                                <label>Sub-Categoría</label>
                                <select id="idCate2" className="form-control">
                                    <option value="0">Selecciona alguna de las opciones...</option>
                                    <option value="tipo2">Fandom 1 / Original 1</option>
                                    <option value="tipo2">Fandom 2 / Original 2</option>
                                    <option value="tipo2">Fandom 3 / Original 3</option>
                                </select>
                            </div>
                        </div>
                        
                        <InputComponent 
                            label="Título" 
                            type="text"
                            name="txtTitle"
                            id="txtTitle"
                            className={CrearPostCSS["cuadro-txt"]}
                        />

                        <label>Descripción</label>
                        <textarea name="txtDesc" id="txtDesc" class={CrearPostCSS["cuadro-txt"]} rows="5"></textarea>

                        <button id="btnPublicar" type="submit" className={CrearPostCSS["boton-pixel-corners"]}>Publicar</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CrearPost