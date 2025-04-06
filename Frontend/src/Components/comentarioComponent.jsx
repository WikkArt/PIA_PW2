function ComentarioComponent(props) {
    
    const { h6, src, p, label} = props
    
    return(
        <>
            <div className="comentarios">
                <img className="circular-pixel-corners" src={src} alt="Foto de Perfil"></img>
                <div>
                    <h6 htmlFor="">{h6}</h6>
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