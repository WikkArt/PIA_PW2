function ModalAgregarAListaComponent(props) {
    
    const { className, id, tabIndex, role, ariaHidden } = props
    
    return(
        <>
            <div className={className} id={id} tabIndex={tabIndex} role={role} aria-hidden={ariaHidden}>
                <div className="modal-dialog modal-dialog-centered">
                    <form className="post-pixel-corners">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="dropdown-pixel-corners" data-bs-toggle="modal" data-bs-target="#idModalPost">
                                    <img src="/Images/Icons/Flecha.png" alt="Botón para Regresar" />
                                </button>
                                <h5 className="modal-title">Agregar a Lista</h5>
                            </div>

                            <div className="modal-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div>
                                            <img src="/Images/Templates/Camara_1-1.png" alt="Imagen de la Lista" />
                                            <h6>Título de la Lista</h6>
                                        </div>

                                        <input className="form-check-input" type="checkbox" id="chbLista" name='chbLista'></input>
                                    </li>
                                </ul>
                            </div>

                            <div className="modal-footer">
                                <button id="btnGuardarPostALista" type="submit" className="dropdown-pixel-corners">Guardar</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default ModalAgregarAListaComponent