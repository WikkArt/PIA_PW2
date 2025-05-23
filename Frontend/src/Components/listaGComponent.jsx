import PerfilUsuarioCSS from "../CSS/perfilUsuario.module.css";

function ListaGComponent(props) {
  const { id, dataBsToggle, dataBsTarget, lista } = props;

  return (
    <>
      <div id={id} className={PerfilUsuarioCSS["lista-grande"]}>
        <button
          className={PerfilUsuarioCSS["lista-pixel-corners"]}
          data-bs-toggle={dataBsToggle}
          data-bs-target={dataBsTarget}
          onClick={props.onClick}
        >
          <img
            src={
              lista?.portada
                ? `http://localhost:3001${lista.portada}`
                : "/Images/Templates/Camara_1-1.png"
            }
            className={PerfilUsuarioCSS["lista-img-pixel-corners"]}
            alt="Imagen de la Lista"
          />
          <div>
            <h3>{lista?.nombre || "Título de la Lista"}</h3>
            <p>{lista?.descripcion || "Sin descripción."}</p>
            <small>
              Creada el:{" "}
              {lista?.fecha_creacion
                ? new Date(lista.fecha_creacion).toLocaleDateString()
                : ""}
            </small>
          </div>
        </button>
      </div>
    </>
  );
}

export default ListaGComponent;
