function ListasSComponent(props) {
    
    const { className, id, src } = props
    
    return(
        <>
            <div className={className}>
                <a id={id} href="#">
                    <img src={src}
                    className="lista-pixel-corners"
                    alt="Imagen de la Lista" /> Nombre de la Lista
                </a>
            </div>
        </>
    )
}

export default ListasSComponent