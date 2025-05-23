import { mostrarAvatar } from "../../JS/mostrarAvatar.js";
import CrearListaCSS from "../../CSS/perfilUsuario.module.css";
import InputComponent from "../inputComponent.jsx";
import { useState } from "react";
import { toast } from "react-toastify";

function ModalCrearListaComponent(props) {
  const { className, id, tabIndex, role, ariaHidden } = props;

  const user = JSON.parse(localStorage.getItem("user"));
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [portada, setPortada] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id_usuario", user.id_usuario);
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    if (portada) {
      formData.append("portada", portada);
    }
    await fetch("http://localhost:3001/listas", {
      method: "POST",
      body: formData,
    });
    toast.success("Lista creada correctamente");
    setTimeout(() => {
      window.location.reload();
    }, 1800);
  };

  return (
    <>
      <div
        className={className}
        id={id}
        tabIndex={tabIndex}
        role={role}
        aria-hidden={ariaHidden}
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <form className="post-pixel-corners" onSubmit={handleSubmit}>
            <div className="modal-content">
              <div className={`modal-header ${CrearListaCSS["lista-header"]}`}>
                <h3>Nueva Lista</h3>
                <button
                  type="button"
                  className="close dropdown-pixel-corners"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <label>X</label>
                </button>
              </div>

              <div className={`modal-body ${CrearListaCSS["lista-body"]} row`}>
                <div className={`${CrearListaCSS["fotos-container"]} col-8`}>
                  <img
                    id="idPortadaLista"
                    src={
                      portada
                        ? URL.createObjectURL(portada)
                        : "/Images/Templates/Camara_GO_21-9.png"
                    }
                    className="dropdown-pixel-corners"
                    alt="Imagen de la Lista"
                  />

                  <input
                    className={CrearListaCSS["form-control"]}
                    type="file"
                    id="btnPortada"
                    name="btnPortada"
                    onChange={(event) => {
                      mostrarAvatar(event, "idPortadaLista");
                      setPortada(event.target.files[0]); // <-- Esto es lo importante
                    }}
                    accept="image/*"
                  ></input>
                </div>

                <div className={`${CrearListaCSS["texto-container"]} col`}>
                  <InputComponent
                    label="Título de la Lista"
                    type="text"
                    name="txtNameList"
                    id="txtNameList"
                    className={CrearListaCSS["cuadro-txt"]}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />

                  <label htmlFor="">Descripción</label>
                  <textarea
                    rows="5"
                    className={CrearListaCSS["cuadro-txt"]}
                    placeholder="Breve descripción..."
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  ></textarea>

                  <button
                    id="btnCrearLista"
                    type="submit"
                    className="dropdown-pixel-corners"
                  >
                    Crear Lista
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalCrearListaComponent;
