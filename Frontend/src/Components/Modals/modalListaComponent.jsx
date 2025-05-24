import ModalElimListaComponent from "./modalElimListaComponent"
import ModalElimPostListaComponent from "./modalElimPostListaComponent"
import PostComponent from "../postComponent"

function ModalListaComponent(props) {
    const { className, id, tabIndex, role, ariaHidden, lista } = props;

    if (!lista) return null; // No mostrar nada si no hay lista seleccionada

    return (
        <>
            {/* Modal para Eliminar Listas */}
            <ModalElimListaComponent
                className="modal fade"
                id="idModalElimLista"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalElimListaComponent>

            {/* Modal para Eliminar Posts de una Lista */}
            <ModalElimPostListaComponent
                className="modal fade"
                id="idModalElimPostLista"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalElimPostListaComponent>

            <div className={className} id={id} tabIndex={tabIndex} role={role} aria-hidden={ariaHidden}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="post-pixel-corners">
                        <div className="modal-content">
                            <div className="modal-header lista-header row">
                                <button data-bs-toggle="modal" data-bs-target="#idModalElimLista" className="eliminar-icono circular-pixel-corners">
                                    <img src="/Images/Icons/Eliminar.png" alt="Icono de Eliminación"></img>
                                </button>
                                
                                <div className="col fotos-container">
                                    <img
                                        id="idPortadaLista"
                                        src={lista.portada ? `http://localhost:3001${lista.portada}` : "/Images/Templates/Camara_GO_21-9.png"}
                                        className="dropdown-pixel-corners"
                                        alt="Imagen de la Lista"
                                    />
                                    <img
                                        id="idFotoPerfilL"
                                        src={lista.usuario?.avatar ? `http://localhost:3001${lista.usuario.avatar}` : "/Images/Templates/Usuario_blanco.png"}
                                        className="circular-pixel-corners"
                                        alt="Foto de Perfil"
                                    />
                                </div>
                                
                                <div className="texto-container">
                                    <h3>{lista.nombre}</h3>
                                    <h6>Creado por {lista.usuario?.nombre || "Usuario"}</h6>
                                    <p>{lista.descripcion}</p>
                                </div>
                            </div>

                            <div className="modal-body lista-body">
                                {lista.posts && lista.posts.length > 0 ? (
                                    lista.posts.map((lp) => (
                                        <div className="lista-post" key={lp.id_lista_post}>
                                            <PostComponent
                                                post={lp.post}
                                                id={`post-${lp.post.id_post}`}
                                                dataBsToggle="modal"
                                                dataBsTarget="#idModalPost"
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <p id="idNoContent">No hay posts en esta lista.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalListaComponent