import ModalElimListaComponent from "./modalElimListaComponent"
import ModalElimPostListaComponent from "./modalElimPostListaComponent"
import PostComponent from "../postComponent"

function ModalListaComponent(props) {
    
    const { className, id, tabIndex, role, ariaHidden } = props
    
    return(
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
                                    <img id="idPortadaLista" src="/Images/Templates/Camara_GO_21-9.png"
                                        className="dropdown-pixel-corners" alt="Imagen de la Lista"></img>
                                    <img id="idFotoPerfilL" src="/Images/Templates/Usuario_blanco.png"
                                        className="circular-pixel-corners" alt="Foto de Perfil"></img>
                                </div>
                                
                                <div className="texto-container">
                                    <h3>Título de la Lista</h3>
                                    <h6>Creado por Nombre de Usuario</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus finibus tempor. 
                                        Vivamus nec nunc dui. Sed vulputate, erat rhoncus tincidunt commodo, sem nisi accumsan purus, tincidunt maximus est ligula id magna. 
                                        Nam at convallis nibh, in tincidunt velit. Vestibulum non scelerisque ipsum, q
                                    </p>
                                </div>
                            </div>

                            <div className="modal-body lista-body">
                                <div className="lista-post">
                                    <button data-bs-toggle="modal" data-bs-target="#idModalElimPostLista" className="eliminar-post-icono circular-pixel-corners">
                                        <img src="/Images/Icons/Eliminar.png" alt="Icono de Eliminación"></img>
                                    </button>
                                    <PostComponent
                                        id="idPost"
                                        dataBsToggle="modal"
                                        dataBsTarget="#idModalPost"
                                    ></PostComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalListaComponent