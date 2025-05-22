import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/bootstrap.min.css';
import CrearPostCSS from './CSS/post.module.css';
import './JS/bootstrap.bundle.min.js';
import { mostrarAvatar } from './JS/mostrarAvatar.js'
import InputComponent from './Components/inputComponent.jsx';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CrearPost() {
    const [archivo, setArchivo] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipo, setTipo] = useState('');
    const [idCategoria, setIdCategoria] = useState('');
    const [categorias, setCategorias] = useState([]);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    // Traer categorías 
    useEffect(() => {
        fetch('http://localhost:3001/categorias')
            .then(res => res.json())
            .then(data => setCategorias(data));
    }, []);

    const handleArchivoChange = (event) => {
        mostrarAvatar(event, 'idPostSample');
        setArchivo(event.target.files[0]);
    };

    //Subir el post
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!archivo || !titulo || !idCategoria || !tipo) {
            toast.error("Completa todos los campos obligatorios.");
            return;
        }
        const formData = new FormData();
        formData.append('id_usuario', user.id_usuario);
        formData.append('id_categoria', idCategoria);
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        formData.append('tipo', tipo);
        formData.append('archivo', archivo);

        try {
            const res = await fetch('http://localhost:3001/posts/crear', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (res.ok) {
                toast.success("¡Post creado!");
                setTimeout(() => navigate('/perfilUsuario'), 2000);
            } else {
                toast.error(data.error || "Error al crear el post");
            }
        } catch (err) {
            toast.error("Error de conexión");
        }
    };

    return (
        <>
            {/* Navegador */}
            <ul id="idNavPixplore" className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <img src="/Images/Logo_DarkMode.png" alt="Logo de PIXPLORE"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link" to="/perfilUsuario">Perfil</Link>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link" to="/login">Cerrar Sesión</Link>
                </li>
            </ul>

            {/* Crear Post */}
            <form id="idCrearPost" className={CrearPostCSS["crear-post"]} onSubmit={handleSubmit}>
                <div className={`${CrearPostCSS.col} ${CrearPostCSS["col-izq"]}`}>
                    <img id="idPostSample" src="/Images/Templates/Post_Gray_16-9.png"
                        className={CrearPostCSS["crear-post-pixel-corners"]} alt="Avatar"></img>
                    <input className={CrearPostCSS["form-control"]} type="file" id="btnAvatar" name="btnAvatar"
                        onChange={handleArchivoChange} accept="image/*"></input>
                </div>

                <div className={`${CrearPostCSS.col} ${CrearPostCSS["col-der"]}`}>
                    <div className={CrearPostCSS["regresar-titulo"]}>
                        <Link to="/perfilUsuario" className={`${CrearPostCSS["regresar-elemento"]} ${CrearPostCSS["boton-pixel-corners"]}`}>
                            <img src="/Images/Icons/Flecha.png" alt="Botón para Regeresar"></img>
                        </Link>
                        <h1>Nueva Publicación</h1>
                    </div>

                    <div className={CrearPostCSS.datos}>
                        <div className={CrearPostCSS.categorias}>
                            <div className="cate-1">
                                <label>Categoría</label>
                                <select id="idCate1" className="form-control"
                                    value={tipo}
                                    onChange={e => setTipo(e.target.value)}
                                    required>
                                    <option value="">Selecciona alguna de las opciones...</option>
                                    <option value="Fandom">Fandom</option>
                                    <option value="Original">Original</option>
                                </select>
                            </div>
                            <div className="cate-2">
                                <label>Sub-Categoría</label>
                                <select id="idCate2" className="form-control"
                                    value={idCategoria}
                                    onChange={e => setIdCategoria(e.target.value)}
                                    required>
                                    <option value="">Selecciona alguna de las opciones...</option>
                                    {categorias
                                        .filter(c => c.tipo_categoria === tipo)
                                        .map(c => (
                                            <option key={c.id_categoria} value={c.id_categoria}>
                                                {c.nombre}
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
                            className={CrearPostCSS["cuadro-txt"]}
                            value={titulo}
                            onChange={e => setTitulo(e.target.value)}
                        />

                        <label>Descripción</label>
                        <textarea name="txtDesc" id="txtDesc" className={CrearPostCSS["cuadro-txt"]} rows="5"
                            value={descripcion}
                            onChange={e => setDescripcion(e.target.value)}
                        ></textarea>

                        <button id="btnPublicar" type="submit" className={CrearPostCSS["boton-pixel-corners"]}>Publicar</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CrearPost;