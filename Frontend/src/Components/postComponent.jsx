function PostComponent(props) {
    const { id, dataBsToggle, dataBsTarget, post, onClick } = props;

    return (
        <div id={id} onClick={onClick}>
            <div className="post-contenedor">
                <div className="post-usuario">
                    <img
                        id="idFotoUsuario"
                        className="circular-pixel-corners"
                        src={post?.usuario?.avatar ? `http://localhost:3001${post.usuario.avatar}` : "/Images/Templates/Usuario_blanco.png"}
                        alt="Foto de Perfil"
                    />
                    <label id="idTitulo">{post?.titulo || "Título de la imagen"}</label>
                </div>
                <div className="post-imagen pixel-corners">
                    <button
                        id="idModalPost"
                        className="btn btn-primary"
                        data-bs-toggle={dataBsToggle}
                        data-bs-target={dataBsTarget}
                    >
                        <img
                            src={post?.url_archivo ? `http://localhost:3001${post.url_archivo}` : "/Images/Templates/Post_1-1.png"}
                            alt={post?.titulo || "Template del Post"}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PostComponent;