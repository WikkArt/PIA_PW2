function ListasSComponent(props) {
    
    const { className, id, src, dataBsToggle, dataBsTarget } = props
    
    return(
        <>
            <div className={className}>
                <button id={id} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget}>
                    <img src={src}
                    className="lista-pixel-corners"
                    alt="Imagen de la Lista" /> Nombre de la Lista
                </button>
            </div>
        </>
    )
}

export default ListasSComponent