function ModalCateComponent(props) {
    
    const { className, id, tabIndex, role, ariaHidden } = props
    
    return(
        <>
            <div className={className} id={id} tabIndex={tabIndex} role={role} aria-hidden={ariaHidden}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="post-pixel-corners">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="idModalNombreC">Nombre de la categoría</h5>
                                <small className="form-text">(Fandom/Original)</small>
                                <button type="button" className="close dropdown-pixel-corners" data-bs-dismiss="modal" aria-label="Close">
                                    <label>X</label>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p id="idModalDescripcionC">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus finibus tempor. 
                                    Vivamus nec nunc dui. Sed vulputate, erat rhoncus tincidunt commodo, sem nisi accumsan purus, tincidunt maximus est ligula id magna. 
                                    Nam at convallis nibh, in tincidunt velit. Vestibulum non scelerisque ipsum, q
                                </p>
                            </div>
                            <div className="modal-footer justify-content-between">
                                <label id="idModalFechaC">DD/MM/AAAA</label>
                                <label id="idModalFechaC">00:00</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCateComponent