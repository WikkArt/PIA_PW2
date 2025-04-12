function ComentarioComponent(props) {
    
    const { h6, src, p, label} = props
    
    return(
        <>
            <div className="comentarios">
                <img className="circular-pixel-corners" src={src} alt="Foto de Perfil"></img>
                <div className="comentarios-content">
                    <div className="nombre-eliminar">
                        <h6 htmlFor="">{h6}</h6>
                        <button data-bs-toggle="modal" data-bs-target="#idModalElimComentario" className="eliminar-comentario-icono">
                            <img src="/Images/Icons/Eliminar.png" alt="Icono de Eliminación"></img>
                        </button>
                    </div>
                    
                    <p className="comentario-pixel-corners" id="idComentarioM" htmlFor="">
                        {p}
                    </p>
                    <label id="idHoraCM" htmlFor="">{label}</label>
                </div>
            </div>
        </>
    )
}

export default ComentarioComponent