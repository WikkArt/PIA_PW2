function ModalAgregarGuardadoComponent(props) {
    
    const { className, id, tabIndex, role, ariaHidden } = props
    
    return(
        <>
            <div className={className} id={id} tabIndex={tabIndex} role={role} aria-hidden={ariaHidden}>
                <div className="modal-dialog modal-dialog-centered">
                    <form className="post-pixel-corners">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Post Guardado</h5>
                            </div>

                            <div className="modal-body">
                                <p>
                                    ¡Muy bien! Este post se ha almacenado en tu 
                                    perfil en la sección de "Guardados".
                                </p>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="dropdown-pixel-corners"
                                    data-bs-toggle="modal" data-bs-target="#idModalPost">
                                    Aceptar
                                </button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default ModalAgregarGuardadoComponent