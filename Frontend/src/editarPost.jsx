import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./CSS/bootstrap.min.css";
import EditarPostCSS from "./CSS/post.module.css";
import "./JS/bootstrap.bundle.min.js";
import { mostrarAvatar } from "./JS/mostrarAvatar.js";
import InputComponent from "./Components/inputComponent.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";

function EditarPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [subCategoria, setSubCategoria] = useState("");
  const [imagen, setImagen] = useState(null);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Cargar datos del post
    fetch(`http://localhost:3001/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setTitulo(data.titulo);
        setDescripcion(data.descripcion);
        setCategoria(data.tipo || "");
        setSubCategoria(data.categoria?.id_categoria || "");
      });
  }, [id]);

  useEffect(() => {
    // Cargar categorías
    fetch("http://localhost:3001/categorias")
      .then((res) => res.json())
      .then((data) => setCategorias(data));
  }, []);

  const handleImagenChange = (event) => {
    setImagen(event.target.files[0]);
    mostrarAvatar(event, "idPostSample");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("tipo", categoria);
    formData.append("id_categoria", subCategoria);
   // if (imagen) formData.append("archivo", imagen);

    try {
      const res = await fetch(`http://localhost:3001/posts/editar/${id}`, {
        method: "PUT",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("¡Post actualizado!");
        setTimeout(() => navigate("/perfilUsuario"), 2000);
      } else {
        toast.error(data.error || "Error al actualizar el post");
      }
    } catch (err) {
      toast.error("Error de conexión");
    }
  };

  if (!post) return <p>Cargando...</p>;

  return (
    <>
     <Navbar />

      {/* Editar Post */}
      <form
        onSubmit={handleSubmit}
        id="idEditarPost"
        className={EditarPostCSS["crear-post"]}
      >
        <div className={`${EditarPostCSS.col} ${EditarPostCSS["col-izq"]}`}>
          <img
            id="idPostSample"
            src={
              imagen
                ? URL.createObjectURL(imagen)
                : post.url_archivo
                ? `http://localhost:3001${post.url_archivo}`
                : "/Images/Templates/Post_Gray_16-9.png"
            }
            className={EditarPostCSS["crear-post-pixel-corners"]}
            alt="Avatar"
          />
          {/* <input
                        className={EditarPostCSS["form-control"]}
                        type="file"
                        id="btnAvatar"
                        name="btnAvatar"
                        onChange={handleImagenChange}
                        accept="image/*"
                    />*/}
        </div>
        <div className={`${EditarPostCSS.col} ${EditarPostCSS["col-der"]}`}>
          <div className={EditarPostCSS["regresar-titulo"]}>
            <Link
              to="/perfilUsuario"
              className={`${EditarPostCSS["regresar-elemento"]} ${EditarPostCSS["boton-pixel-corners"]}`}
            >
              <img
                src="/Images/Icons/Flecha.png"
                alt="Botón para Regeresar"
              ></img>
            </Link>
            <h1>Editar Publicación</h1>
          </div>

          <div className={EditarPostCSS.datos}>
            <div className={EditarPostCSS.categorias}>
              <div className="cate-1">
                <label>Categoría</label>
                <select
                  id="idCate1"
                  className="form-control"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <option value="">Selecciona alguna de las opciones...</option>
                  <option value="Fandom">Fandom</option>
                  <option value="Original">Original</option>
                </select>
              </div>
              <div className="cate-2">
                <label>Sub-Categoría</label>
                <select
                  id="idCate2"
                  className="form-control"
                  value={subCategoria}
                  onChange={(e) => setSubCategoria(e.target.value)}
                >
                  <option value="">Selecciona alguna de las opciones...</option>
                  {categorias
                    .filter((cat) => cat.tipo_categoria === categoria) // Solo muestra las del tipo seleccionado
                    .map((cat) => (
                      <option key={cat.id_categoria} value={cat.id_categoria}>
                        {cat.nombre}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <InputComponent
              label="Título"
              type="text"
              name="txtTitle"
              id="txtTitle"
              className={EditarPostCSS["cuadro-txt"]}
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />

            <label>Descripción</label>
            <textarea
              name="txtDesc"
              id="txtDesc"
              className={EditarPostCSS["cuadro-txt"]}
              rows="5"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
            <button
              id="btnEditPost"
              type="submit"
              className={EditarPostCSS["boton-pixel-corners"]}
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditarPost;
