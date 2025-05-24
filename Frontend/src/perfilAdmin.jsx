import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/bootstrap.min.css";
import PerfilAdminCSS from "./CSS/perfilAdmin.module.css";
import "./JS/bootstrap.bundle.min.js";
import ModalDesacUserComponent from "./Components/Modals/modalDesacUserComponent.jsx";
import ModalCrearCateComponent from "./Components/Modals/modalCrearCateComponent.jsx";
import ModalEditarCateComponent from "./Components/Modals/modalEditarCateComponent.jsx";
import ModalElimCateComponent from "./Components/Modals/modalElimCateComponent.jsx";
import Navbar from "./Components/Navbar";

function PerfilAdmin() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const [activeTab, setActiveTab] = useState("usuarios");
  const [categorias, setCategorias] = useState([]);
  const [categoriaEditar, setCategoriaEditar] = useState(null);
  const [usuarios, setUsuarios] = useState([]);

  // Traer categorías del backend
  useEffect(() => {
    if (activeTab === "categorias") {
      fetch("http://localhost:3001/categorias")
        .then((res) => res.json())
        .then((data) => setCategorias(data))
        .catch(() => setCategorias([]));
    }
  }, [activeTab]);

  // Traer usuarios del backend
  useEffect(() => {
    if (activeTab === "usuarios") {
      fetch("http://localhost:3001/usuarios")
        .then((res) => res.json())
        .then((data) => setUsuarios(data))
        .catch(() => setUsuarios([]));
    }
  }, [activeTab]);

  // Función para cambiar las pestañas
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const borrarUsuario = async (id_usuario) => {
    if (
      window.confirm(
        "¿Seguro que deseas borrar este usuario y todos sus datos?"
      )
    ) {
      await fetch(`http://localhost:3001/admi/usuario/${id_usuario}`, {
        method: "DELETE",
      });
     
      //setUsuarios((prev) => prev.filter((u) => u.id_usuario !== id_usuario));
    }
  };

  return (
    <>
      {/* Navegador */}
      <Navbar />
      {/* Modal para Desactivar Usuario */}
      <ModalCrearCateComponent
        className={`modal fade ${PerfilAdminCSS["modal-crear-cate"]}`}
        id="idModalCrearCate"
        tabIndex="-1"
        role="dialog"
        ariaHidden="true"
        onCategoriaCreada={(nuevaCategoria) =>
          setCategorias((prev) => [...prev, nuevaCategoria])
        }
      />

      {/* Modal para Crear Categoria */}
      <ModalCrearCateComponent
        className={`modal fade ${PerfilAdminCSS["modal-crear-cate"]}`}
        id="idModalCrearCate"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      ></ModalCrearCateComponent>

      {/* Modal para Editar Categoria */}
      <ModalEditarCateComponent
        className={`modal fade ${PerfilAdminCSS["modal-editar-cate"]}`}
        id="idModalEditarCate"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        categoria={categoriaEditar}
        onCategoriaEditada={(catActualizada) => {
          setCategorias((prev) =>
            prev.map((cat) =>
              cat.id_categoria === catActualizada.id_categoria
                ? catActualizada
                : cat
            )
          );
        }}
      ></ModalEditarCateComponent>

      {/* Modal para Eliminar Categoria */}
      <ModalElimCateComponent
        className={`modal fade ${PerfilAdminCSS["modal-editar-cate"]}`}
        id="idModalElimCate"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      ></ModalElimCateComponent>

      {/* Perfil del Administrador */}
      <div className={PerfilAdminCSS.cuerpo}>
        <h1>Administrador</h1>

        <div className={PerfilAdminCSS["tabs-container"]}>
          {/* Pestanias */}
          <ul className="nav nav-tabs" id={PerfilAdminCSS.adminTabs}>
            <li className="nav-item">
              <button
                className={`${PerfilAdminCSS["nav-link"]} ${
                  activeTab === "usuarios" ? PerfilAdminCSS.active : ""
                }`}
                onClick={() => handleTabChange("usuarios")}
                id="usuarios-tab"
                databstoggle="tab"
                databstarget="#idUsuarios"
                type="button"
                role="tab"
                aria-controls="idUsuarios"
                aria-selected="true"
              >
                Usuarios
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`${PerfilAdminCSS["nav-link"]} ${
                  activeTab === "categorias" ? PerfilAdminCSS.active : ""
                }`}
                onClick={() => handleTabChange("categorias")}
                id="categorias-tab"
                databstoggle="tab"
                databstarget="#idCategorias"
                type="button"
                role="tab"
                aria-controls="idCategorias"
                aria-selected="false"
              >
                Categorias
              </button>
            </li>
          </ul>

          {/* Contenido */}
          <div className={PerfilAdminCSS["tab-content"]}>
            {/* Usuarios */}
            {activeTab === "usuarios" && (
              <div
                className={`${PerfilAdminCSS["tab-pane"]} fade ${
                  activeTab === "usuarios" ? "show active" : ""
                }`}
                id="idUsuarios"
                role="tabpanel"
                aria-labelledby="usuarios-tab"
              >
                <h2>Gestión de Usuarios</h2>

                <div id={PerfilAdminCSS.idTabUsuarios}>
                  <table
                    className={`${PerfilAdminCSS.table} ${PerfilAdminCSS["pixel-corners"]}`}
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usuarios.length === 0 ? (
                        <tr>
                          <td id="idNoContent">No hay usuarios registrados.</td>
                        </tr>
                      ) : (
                        usuarios.map((usuario) => (
                          <tr key={usuario.id_usuario}>
                            <td>{usuario.id_usuario}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>
                              <button
                                className={`${PerfilAdminCSS.btn} ${PerfilAdminCSS["btn-danger"]} ${PerfilAdminCSS["pixel-corners"]}`}
                                onClick={() =>
                                  borrarUsuario(usuario.id_usuario)
                                }
                              
                              >
                                Borrar
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Categorias */}
            {activeTab === "categorias" && (
              <div
                className={`${PerfilAdminCSS["tab-pane"]} fade ${
                  activeTab === "categorias" ? "show active" : ""
                }`}
                id="idCategorias"
                role="tabpanel"
                aria-labelledby="categorias-tab"
              >
                <div className={PerfilAdminCSS["tab-subtitulo"]}>
                  <h2>Gestión de Categorías</h2>
                  <label
                    className={`${PerfilAdminCSS["agregar-elemento"]} ${PerfilAdminCSS["boton-pixel-corners"]}`}
                  >
                    +
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#idModalCrearCate"
                    >
                      Agregar Categoría
                    </button>
                  </label>
                </div>

                <div className={`${PerfilAdminCSS["tab-categorias"]} row`}>
                  {/* Fandoms */}
                  <div className={`${PerfilAdminCSS["cate-fandom"]} col`}>
                    <h3>Fandoms</h3>
                    <ul className="list-group">
                      {categorias
                        .filter((c) => c.tipo_categoria === "Fandom")
                        .map((categoria) => (
                          <li
                            key={categoria.id_categoria}
                            className={`${PerfilAdminCSS["list-group-item"]} ${PerfilAdminCSS["tabla-categorias-pixel-corners"]}`}
                          >
                            <div className={PerfilAdminCSS["categoria-info"]}>
                              <strong>{categoria.nombre}</strong>
                              <p>{categoria.descripcion}</p>
                            </div>
                            <span>
                              <button
                                className={`${PerfilAdminCSS.btn} ${PerfilAdminCSS["btn-warning"]} ${PerfilAdminCSS["pixel-corners"]}`}
                                data-bs-toggle="modal"
                                data-bs-target="#idModalEditarCate"
                                onClick={() => setCategoriaEditar(categoria)}
                              >
                                Editar
                              </button>
                              <button
                                className={`${PerfilAdminCSS.btn} ${PerfilAdminCSS["btn-danger2"]} ${PerfilAdminCSS["pixel-corners"]}`}
                                data-bs-toggle="modal"
                                data-bs-target="#idModalElimCate"
                              >
                                Eliminar
                              </button>
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Original */}
                  <div className={`${PerfilAdminCSS["cate-original"]} col`}>
                    <h3>Original</h3>
                    <ul className="list-group">
                      {categorias
                        .filter((c) => c.tipo_categoria === "Original")
                        .map((categoria) => (
                          <li
                            key={categoria.id_categoria}
                            className={`${PerfilAdminCSS["list-group-item"]} ${PerfilAdminCSS["tabla-categorias-pixel-corners"]}`}
                          >
                            <div className={PerfilAdminCSS["categoria-info"]}>
                              <strong>{categoria.nombre}</strong>
                              <p>{categoria.descripcion}</p>
                            </div>
                            <span>
                              <button
                                className={`${PerfilAdminCSS.btn} ${PerfilAdminCSS["btn-warning"]} ${PerfilAdminCSS["pixel-corners"]}`}
                                data-bs-toggle="modal"
                                data-bs-target="#idModalEditarCate"
                                onClick={() => setCategoriaEditar(categoria)}
                              >
                                Editar
                              </button>
                              <button
                                className={`${PerfilAdminCSS.btn} ${PerfilAdminCSS["btn-danger2"]} ${PerfilAdminCSS["pixel-corners"]}`}
                                data-bs-toggle="modal"
                                data-bs-target="#idModalElimCate"
                              >
                                Eliminar
                              </button>
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PerfilAdmin;
