import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/bootstrap.min.css';
import EditarPostCSS from './CSS/post.module.css';
import './JS/bootstrap.bundle.min.js';
import { mostrarAvatar } from './JS/mostrarAvatar.js'
import InputComponent from './Components/inputComponent.jsx';

function EditarPost() {
    
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

            {/* Editar Post */}
            <form action="" id="idEditarPost" className={EditarPostCSS["crear-post"]}>
                <div className={`${EditarPostCSS.col} ${EditarPostCSS["col-izq"]}`}>
                    <img id="idPostSample" src="/Images/Templates/Post_Gray_16-9.png" 
                    className={EditarPostCSS["crear-post-pixel-corners"]} alt="Avatar"></img>

                    <input className={EditarPostCSS["form-control"]} type="file" id="btnAvatar" name="btnAvatar" 
                    onChange={(event) => mostrarAvatar(event, 'idPostSample')} accept="image/*"></input>
                </div>
                
                <div className={`${EditarPostCSS.col} ${EditarPostCSS["col-der"]}`}>
                    <div className={EditarPostCSS["regresar-titulo"]}>
                        <Link to="/perfilUsuario" className={`${EditarPostCSS["regresar-elemento"]} ${EditarPostCSS["boton-pixel-corners"]}`}>
                            <img src="/Images/Icons/Flecha.png" alt="Botón para Regeresar"></img>
                        </Link>
                        <h1>Editar Publicación</h1>
                    </div>

                    <div className={EditarPostCSS.datos}>
                        
                        <div className={EditarPostCSS.categorias}>
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
                            className={EditarPostCSS["cuadro-txt"]}
                        />

                        <label>Descripción</label>
                        <textarea name="txtDesc" id="txtDesc" class={EditarPostCSS["cuadro-txt"]} rows="5"></textarea>

                        <button id="btnEditPost" type="submit" className={EditarPostCSS["boton-pixel-corners"]}>Guardar Cambios</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default EditarPost