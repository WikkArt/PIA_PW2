import PerfilAdminCSS from '../../CSS/perfilAdmin.module.css';

function ModalDesacUserComponent(props) {
    
    const { className, id, tabIndex, role, ariaHidden } = props
    
    return(
        <>
            <div className={className} id={id} tabIndex={tabIndex} role={role} aria-hidden={ariaHidden}>
                <div className="modal-dialog modal-dialog-centered">
                    <form className={PerfilAdminCSS["post-pixel-corners"]}>
                        <div className={`modal-content ${PerfilAdminCSS["eliminar-content"]}`}>
                            <div className={`modal-header ${PerfilAdminCSS["eliminar-header"]}`}>
                                <h5 className="modal-title">Desactivar Usuario</h5>
                                <button type="button" className="close dropdown-pixel-corners" data-bs-dismiss="modal" aria-label="Close">
                                    <label>X</label>
                                </button>
                            </div>
                            <div className={`modal-body ${PerfilAdminCSS["eliminar-body"]}`}>
                                <p>
                                    ¿Estás seguro de desactivar este usuario? Al presionar "Sí", el usuario ya no podrá acceder
                                    a la plataforma.
                                </p>
                            </div>
                            <div className={`modal-footer ${PerfilAdminCSS["eliminar-footer"]}`}>
                                <button type="button" className={`btn dropdown-pixel-corners ${PerfilAdminCSS["btn-secondary"]}`}>
                                    Sí
                                </button>
                                <button type="button" className={`btn dropdown-pixel-corners ${PerfilAdminCSS["btn-secondary"]}`}
                                    data-bs-dismiss="modal">
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

export default ModalDesacUserComponent