import ComentarioComponent from "../comentarioComponent"

function ModalPostComponent(props) {
    
    const { className, id, tabIndex, role, ariaHidden } = props
    
    return(
        <>
            <div className={className} id={id} tabIndex={tabIndex} role={role} aria-hidden={ariaHidden}>
                <button type="button" className="close dropdown-pixel-corners" data-bs-dismiss="modal" aria-label="Close">
                    <label>X</label>
                </button>

                <div className="modal-dialog modal-dialog-centered modal-xl post-pixel-corners" role="document">
                    <div className="modal-content">
                        <div className="col-8 modal-image">
                            <img id="idModalImagen" src="/Images/Templates/Post_Gray_1-1.png" alt="Template del Post"></img>
                        </div>
                        <div className="col modal-info">
                            <div className="modal-header">
                                <img id="idFotoUsuarioM" className="circular-pixel-corners" src="/Images/Templates/Usuario_blanco.png" alt="Foto de Perfil"></img>
                                
                                <div>
                                    <h5 id="idNombreUsuarioM">Nombre de Usuario</h5>
                                    <label id="idHoraM" htmlFor="">DD/MM/AAAA 00:00</label>
                                </div>
                                
                                <div id="idDropdownM" className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle dropdown-pixel-corners" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                    <div className="dropdown-menu dropdown-pixel-corners" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Guardar</a>
                                        <a className="dropdown-item" href="#">Agregar a Lista</a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body">
                                <h6 id="idModalTitulo">Título de la imagen</h6>
                                <p id="idModalDescripcion">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus finibus tempor. 
                                    Vivamus nec nunc dui. Sed vulputate, erat rhoncus tincidunt commodo, sem nisi accumsan purus, tincidunt maximus est ligula id magna. 
                                    Nam at convallis nibh, in tincidunt velit. Vestibulum non scelerisque ipsum, quis molestie turpis. Pellentesque iaculis fringilla justo, 
                                    ac hendrerit ex accumsan sit amet. Phasellus dignissim velit iaculis, consequat lacus sed, bibendum felis. Sed vulputate in enim ut 
                                    ultricies. Aliquam ut justo lacus. Donec id tortor neque.
                                </p>
                                <div className="modal-categorias">
                                    <label htmlFor="">Fandom/Original</label>
                                    <label htmlFor="">Nombre Fandom/Original</label>
                                </div>
                                <div className="modal-botones">
                                    <div>
                                        <label htmlFor="">JPEG</label>
                                        <a href="/Images/Templates/Usuario_blanco.png" download>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalPostComponent