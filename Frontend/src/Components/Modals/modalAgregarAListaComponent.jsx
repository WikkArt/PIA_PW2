import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function ModalAgregarAListaComponent(props) {
  const { className, id, tabIndex, role, ariaHidden } = props;
  const [listaSeleccionada, setListaSeleccionada] = useState([]); // <-- array vacío
  const [listas, setListas] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      fetch(`http://localhost:3001/listas/usuario/${user.id_usuario}`)
        .then((res) => res.json())
        .then((data) => setListas(Array.isArray(data) ? data : []));
    }
  }, []);

  useEffect(() => {
    if (!props.id_post) return;
    fetch(`http://localhost:3001/listas/post/${props.id_post}`)
      .then((res) => res.json())
      .then((data) => {
        // data debe ser un array de listas donde está el post
        if (Array.isArray(data)) {
          setListaSeleccionada(data.map((l) => l.id_lista));
        }
      });
  }, [props.id_post]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const modal = window.bootstrap?.Modal.getOrCreateInstance(
      document.getElementById(props.id)
    );
    if (modal) modal.hide();
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
        <div className="modal-dialog modal-dialog-centered">
          <form className="post-pixel-corners" onSubmit={handleSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="dropdown-pixel-corners"
                  data-bs-toggle="modal"
                  data-bs-target="#idModalPost"
                >
                  <img
                    src="/Images/Icons/Flecha.png"
                    alt="Botón para Regresar"
                  />
                </button>
                <h5 className="modal-title">Agregar a Lista</h5>
              </div>

              <div className="modal-body">
                <ul className="list-group list-group-flush">
                  {listas.length === 0 ? (
                    <li className="list-group-item">No tienes listas.</li>
                  ) : (
                    listas.map((lista) => (
                      <li className="list-group-item" key={lista.id_lista}>
                        <div>
                          <img
                            src={
                              lista.portada
                                ? `http://localhost:3001${lista.portada}`
                                : "/Images/Templates/Camara_1-1.png"
                            }
                            alt="Imagen de la Lista"
                          />
                          <h6>{lista.nombre}</h6>
                        </div>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`chbLista-${lista.id_lista}`}
                          name="chbLista"
                          checked={listaSeleccionada.includes(lista.id_lista)}
                          onChange={async (e) => {
                            if (e.target.checked) {
                              // Agregar post a la lista
                              await fetch("http://localhost:3001/listas/agregarPost", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  id_lista: lista.id_lista,
                                  id_post: props.id_post,
                                }),
                              });
                              setListaSeleccionada((prev) => [...prev, lista.id_lista]);
                            } else {
                              // Quitar post de la lista
                              await fetch("http://localhost:3001/listas/quitarPost", {
                                method: "DELETE",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  id_lista: lista.id_lista,
                                  id_post: props.id_post,
                                }),
                              });
                              setListaSeleccionada((prev) =>
                                prev.filter((id) => id !== lista.id_lista)
                              );
                            }
                          }}
                        />
                      </li>
                    ))
                  )}
                </ul>
              </div>

              <div className="modal-footer">
                <button
                  id="btnGuardarPostALista"
                  type="submit"
                  className="dropdown-pixel-corners"
                >
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalAgregarAListaComponent;
