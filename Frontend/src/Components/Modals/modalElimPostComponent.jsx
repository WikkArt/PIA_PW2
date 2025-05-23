function ModalElimPostComponent(props) {
    
    const { className, id, tabIndex, role, ariaHidden } = props
    
    return(
        <>
            <div className={className} id={id} tabIndex={tabIndex} role={role} aria-hidden={ariaHidden}>
                <div className="modal-dialog modal-dialog-centered">
                    <form className="post-pixel-corners">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Eliminar Post</h5>
                                <button type="button" className="close dropdown-pixel-corners" data-bs-dismiss="modal" aria-label="Close">
                                    <label>X</label>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    ¿Estás seguro de eliminar este post? Al presionar el 
                                    botón "Sí" ya no será posible recuperarlo de nuevo.
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="dropdown-pixel-corners">
                                    Sí
                                </button>
                                <button type="button" className="dropdown-pixel-corners"
                                    data-bs-toggle="modal" data-bs-target="#idModalPost">
                                    No
                                </button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default ModalElimPostComponent