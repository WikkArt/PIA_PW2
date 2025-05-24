function ModalCateComponent(props) {
    const { className, id, tabIndex, role, ariaHidden, categoria } = props;

    return (
        <div className={className} id={id} tabIndex={tabIndex} role={role} aria-hidden={ariaHidden}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="post-pixel-corners">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="idModalNombreC">
                                {categoria?.nombre || "Nombre de la categoría"}
                            </h5>
                            <small className="form-text">
                                {categoria?.tipo_categoria || "(Fandom/Original)"}
                            </small>
                            <button type="button" className="close dropdown-pixel-corners" data-bs-dismiss="modal" aria-label="Close">
                                <label>X</label>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p id="idModalDescripcionC">
                                {categoria?.descripcion || "Sin descripción"}
                            </p>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <label id="idModalFechaC">
                                {categoria?.fecha_creacion
                                    ? new Date(categoria.fecha_creacion).toLocaleDateString()
                                    : "DD/MM/AAAA"}
                            </label>
                            <label id="idModalFechaC">
                                {categoria?.fecha_creacion
                                    ? new Date(categoria.fecha_creacion).toLocaleTimeString()
                                    : "00:00"}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCateComponent;