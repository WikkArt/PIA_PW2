import { Link } from 'react-router-dom';
import ComentarioComponent from "../comentarioComponent"
import ModalAgregarGuardadoComponent from './modalAgregarGuardado';
import ModalElimGuardadoComponent from "./modalElimGuardadoComponent"
import ModalAgregarAListaComponent from './modalAgregarAListaComponent';
import ModalElimPostComponent from "./modalElimPostComponent"
import ModalElimComentarioComponent from './modalElimComentarioComponent';

function ModalPostComponent(props) {
    const { className, id, tabIndex, role, ariaHidden, post } = props;

    return (
        <>
            {/* Modal para Agregar un Elemento Guardado */}
            <ModalAgregarGuardadoComponent
                className="modal fade"
                id="idModalAgregarGuardado"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalAgregarGuardadoComponent>

            {/* Modal para Eliminar un Elemento Guardado */}
            <ModalElimGuardadoComponent
                className="modal fade"
                id="idModalElimGuardado"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalElimGuardadoComponent>

            {/* Modal para Agregar el Post a una Lista */}
            <ModalAgregarAListaComponent
                className="modal fade"
                id="idModalAgregarALista"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalAgregarAListaComponent>

            {/* Modal para Eliminar el Post */}
            <ModalElimPostComponent
                className="modal fade"
                id="idModalElimPost"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalElimPostComponent>

            {/* Modal para Eliminar un Comentario */}
            <ModalElimComentarioComponent
                className="modal fade"
                id="idModalElimComentario"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalElimComentarioComponent>

            <div className={className} id={id} tabIndex={tabIndex} role={role} aria-hidden={ariaHidden}>
                <button type="button" className="close dropdown-pixel-corners" data-bs-dismiss="modal" aria-label="Close">
                    <label>X</label>
                </button>
                <div className="modal-dialog modal-dialog-centered modal-xl post-pixel-corners" role="document">
                    <div className="modal-content">
                        {post ? (
                            <>
                                <div className="col-8 modal-image">
                                    <img
                                        id="idModalImagen"
                                        src={post.url_archivo ? `http://localhost:3001${post.url_archivo}` : "/Images/Templates/Post_Gray_1-1.png"}
                                        alt={post.titulo || "Template del Post"}
                                    />
                                </div>
                                <div className="col modal-info">
                                    <div className="modal-header">
                                        <img
                                            id="idFotoUsuarioM"
                                            className="circular-pixel-corners"
                                            src={post.usuario?.avatar ? `http://localhost:3001${post.usuario.avatar}` : "/Images/Templates/Usuario_blanco.png"}
                                            alt="Foto de Perfil"
                                        />
                                        <div>
                                            <h5 id="idNombreUsuarioM">{post.usuario?.nombre || "Nombre de Usuario"}</h5>
                                            <label id="idHoraM">
                                                {post.fecha_subida ? new Date(post.fecha_subida).toLocaleString() : "DD/MM/AAAA 00:00"}
                                            </label>
                                        </div>
                                        <div id="idDropdownM" className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle dropdown-pixel-corners" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                            <div className="dropdown-menu dropdown-pixel-corners" aria-labelledby="dropdownMenuButton">
                                                <Link className="dropdown-item" to="/editarPost" onClick={"data-bs-dismiss=modal"}>
                                                    Editar Post
                                                </Link>
                                                <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#idModalAgregarGuardado">
                                                    Guardar
                                                </button>
                                                <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#idModalElimGuardado">
                                                    Quitar Elemento Guardado
                                                </button>
                                                <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#idModalAgregarALista">
                                                    Agregar a Lista
                                                </button>
                                                <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#idModalElimPost">
                                                    Eliminar Post
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <h6 id="idModalTitulo">{post.titulo || "Título de la imagen"}</h6>
                                        <p id="idModalDescripcion">{post.descripcion || ""}</p>
                                        <div className="modal-categorias">
                                            <label>{post.tipo || "Fandom/Original"}</label>
                                            <label>{post.categoria?.nombre || "Sin categoría"}</label>
                                        </div>
                                        <div className="modal-botones">
                                            <div>
                                                <label>{post.url_archivo?.split('.').pop()?.toUpperCase() || "JPEG"}</label>
                                                <a href={post.url_archivo ? `http://localhost:3001${post.url_archivo}` : "#"} download>
                                                    <img src="/Images/Icons/Descarga.png" alt="Descarga" /> Descargar
                                                </a>
                                            </div>
                                            <div>
                                                <button className="button-pixel-corners">
                                                    <img src="/Images/Icons/Like.png" alt="Like" /> Like
                                                </button>
                                                <button className="button-pixel-corners">
                                                    <img src="/Images/Icons/Dislike.png" alt="Dislike" /> Dislike
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <div className="input-comentario">
                                            <img className="circular-pixel-corners" src="/Images/Templates/Usuario_blanco.png" alt="Foto de Perfil"></img>
                                            <div>
                                                <textarea id="idTextoM" className="comentario-pixel-corners"></textarea>
                                                <button id="idEnviarCM">
                                                    <img src="/Images/Icons/Enviar.png" alt="Enviar comentario"></img>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="seccion-comentarios">
                                            <ComentarioComponent
                                                h6="Nombre de Usuario"
                                                src="/Images/Templates/Usuario_blanco.png"
                                                p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus finibus tempor. 
                                              Vivamus nec nunc dui."
                                                label="DD/MM/AAAA 00:00"
                                            ></ComentarioComponent>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="modal-body">
                                <p>Cargando...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalPostComponent;