function PostComponent(props) {
    
    const { id, dataBsToggle, dataBsTarget } = props
    
    return(
        <>
            <div id={id}>
                <div className="post-contenedor">
                    <div className="post-usuario">
                        <img id="idFotoUsuario" className="circular-pixel-corners" src="/Images/Templates/Usuario_blanco.png" alt="Foto de Perfil"></img>
                        <label id="idTitulo" htmlFor="">Título de la imagen</label>
                    </div>
                    <div className="post-imagen pixel-corners">
                        <button id="idModalPost" className="btn btn-primary" data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget}>
                            <img src="/Images/Templates/Post_1-1.png" alt="Template del Post"></img>
                        </button>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default PostComponent