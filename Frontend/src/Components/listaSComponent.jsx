function ListasSComponent(props) {
    const { className, id, src, dataBsToggle, dataBsTarget, onClick, nombre } = props;

    return (
        <div className={className}>
            <button
                id={id}
                data-bs-toggle={dataBsToggle}
                data-bs-target={dataBsTarget}
                onClick={onClick}
            >
                <img
                    src={src}
                    className="lista-pixel-corners"
                    alt="Imagen de la Lista"
                /> {nombre || "Nombre de la Lista"}
            </button>
        </div>
    );
}

export default ListasSComponent