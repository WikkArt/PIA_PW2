import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './CSS/bootstrap.min.css'
import './CSS/dashboard.css'
import './JS/bootstrap.bundle.min.js'
import './JS/jquery-3.7.1.min.js'

function Dashboard() {

    // Checkboxes
    const [checkedState, setCheckedState] = useState({
        tipo0: true, // Estado del checkbox principal
        categorias: {
            fandom: true,
            original: true,
        },

        tipo1: true,
        fandom: {
            fandom1: true
        },

        tipo2: true,
        original: {
            original1: true
        }
    });

    // Función para manejar cambios en los checkboxes
    const handleChange = (event) => {
        const { name, checked } = event.target;

        if (name === 'tipo0') {
            setCheckedState(prevState => ({
                ...prevState,
                tipo0: checked,
                categorias: {
                    fandom: checked,
                    original: checked,
                },
            }));
        } else {
            // Si se cambia uno de los checkboxes de la lista, solo actualizamos ese checkbox
            setCheckedState(prevState => ({
                ...prevState,
                categorias: {
                    ...prevState.categorias,
                    [name]: checked,
                },
            }));
        }
            
        if (name === 'tipo1') {
            setCheckedState(prevState => ({
                ...prevState,
                tipo1: checked,
                fandom: {
                    fandom1: checked
                },
            }));
        } else {
            setCheckedState(prevState => ({
                ...prevState,
                fandom: {
                    ...prevState.fandom,
                    [name]: checked,
                },
            }));
        }
        
        if (name === 'tipo2') {
            setCheckedState(prevState => ({
                ...prevState,
                tipo2: checked,
                original: {
                    original1: checked
                },
            }));
        } else {
            setCheckedState(prevState => ({
                ...prevState,
                original: {
                    ...prevState.original,
                    [name]: checked,
                },
            }));
        }
    };

    const moveList = (direction) => {
        const listContainer = document.querySelector('.listas');
        const scrollAmount = 200; // Cantidad de píxeles a mover

        // Mover el contenedor en la dirección indicada
        listContainer.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    };

    // Función para verificar el estado de los botones de desplazamiento
    const checkScrollButtons = () => {
        const listContainer = document.querySelector('.listas');
        const leftBtn = document.querySelector('.scroll-btn.left');
        const rightBtn = document.querySelector('.scroll-btn.right');
        
        if (listContainer.scrollWidth > listContainer.clientWidth) {
            leftBtn.style.display = 'block';
            rightBtn.style.display = 'block';

            if (listContainer.scrollLeft <= 0) {
                leftBtn.style.display = 'none';
            }

            if (listContainer.scrollLeft + listContainer.clientWidth >= listContainer.scrollWidth) {
                rightBtn.style.display = 'none';
            }
        } else {
            leftBtn.style.display = 'none';
            rightBtn.style.display = 'none';
        }
    };

    // useEffect para gestionar los eventos de desplazamiento
    useEffect(() => {
        const listContainer = document.querySelector('.listas');
        
        if (listContainer) {
            listContainer.addEventListener('scroll', checkScrollButtons);
        }

        window.addEventListener('load', checkScrollButtons);
        window.addEventListener('resize', checkScrollButtons);

        return () => {
            window.removeEventListener('load', checkScrollButtons);
            window.removeEventListener('resize', checkScrollButtons);
        };

    }, []);

    $('#idModalPost').on('shown.bs.modal', function () {
        $('#idModalPost').trigger('focus')
    })

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
                    <Link className="nav-link active" to="/">Inicio</Link>
                </li>
                <li className="nav-item nav-buscador">
                    <input type="text"></input>
                    <button id="idNavBuscar">
                        <img src="/Images/Icons/Buscar.png" alt="Buscador"></img>
                    </button>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link" to="/login">Iniciar Sesión</Link>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link" to="/registro">Registro</Link>
                </li>
            </ul>

            <div className="cuerpo">
                
                {/* Modal de Posts */}
                <div className="modal fade" id="idModalPost" tabIndex="-1" role="dialog" aria-labelledby="idModalPostTitle" aria-hidden="true">
                    <button type="button" className="close dropdown-pixel-corners" data-bs-dismiss="modal" aria-label="Close">
                        <label>X</label>
                    </button>

                    <div className="modal-dialog modal-dialog-centered modal-xl post-pixel-corners" role="document">
                        <div className="modal-content">
                            <div className="col-8 modal-image">
                                <img id="idModalImagen" src="/Images/Templates/Post_Gray_1-1.png" alt="Template del Post"></img>
                            </div>
                            <div className="col modal-info">
                                <div className="modal-header">
                                    <img id="idFotoUsuarioM" className="circular-pixel-corners" src="/Images/Templates/Usuario_blanco.png" alt="Foto de Perfil"></img>
                                    
                                    <div>
                                        <h5 id="idNombreUsuarioM">Nombre de Usuario</h5>
                                        <label id="idHoraM" htmlFor="">DD/MM/AAAA 00:00</label>
                                    </div>
                                    
                                    <div id="idDropdownM" className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle dropdown-pixel-corners" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                        <div className="dropdown-menu dropdown-pixel-corners" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Guardar</a>
                                            <a className="dropdown-item" href="#">Agregar a Lista</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-body">
                                    <h6 id="idModalTitulo">Título de la imagen</h6>
                                    <p id="idModalDescripcion">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus finibus tempor. 
                                        Vivamus nec nunc dui. Sed vulputate, erat rhoncus tincidunt commodo, sem nisi accumsan purus, tincidunt maximus est ligula id magna. 
                                        Nam at convallis nibh, in tincidunt velit. Vestibulum non scelerisque ipsum, quis molestie turpis. Pellentesque iaculis fringilla justo, 
                                        ac hendrerit ex accumsan sit amet. Phasellus dignissim velit iaculis, consequat lacus sed, bibendum felis. Sed vulputate in enim ut 
                                        ultricies. Aliquam ut justo lacus. Donec id tortor neque.
                                    </p>
                                    <div className="modal-categorias">
                                        <label htmlFor="">Fandom/Original</label>
                                        <label htmlFor="">Nombre Fandom/Original</label>
                                    </div>
                                    <div className="modal-botones">
                                        <div>
                                            <label htmlFor="">JPEG</label>
                                            <a href="/Images/Templates/Usuario_blanco.png" download>
                                                <img src="/Images/Icons/Descarga.png" alt="Descarga" /> Descargar
                                            </a>
                                        </div>
                                        
                                        <div>
                                            <button className="button-pixel-corners">
                                                <img src="/Images/Icons/Like.png" alt="Like" /> Like
                                            </button>
                                            <button className="button-pixel-corners">
                                                <img src="/Images/Icons/Dislike.png" alt="Dislike" /> Dislike
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="input-comentario">
                                        <img className="circular-pixel-corners" src="/Images/Templates/Usuario_blanco.png" alt="Foto de Perfil"></img>
                                        <div>
                                            <textarea id="idTextoM" className="comentario-pixel-corners"></textarea>
                                            <button id="idEnviarCM">
                                                <img src="/Images/Icons/Enviar.png" alt="Enviar comentario"></img>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="seccion-comentarios">
                                        <div className="comentarios">
                                            <img className="circular-pixel-corners" src="/Images/Templates/Usuario_blanco.png" alt="Foto de Perfil"></img>
                                            <div>
                                                <h6 htmlFor="">Nombre de Usuario</h6>
                                                <label className="comentario-pixel-corners" id="idComentarioM" htmlFor="">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus finibus tempor. 
                                                    Vivamus nec nunc dui.
                                                </label>
                                                <label id="idHoraCM" htmlFor="">DD/MM/AAAA 00:00</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Modal de la Informacion de las Categorias */}
                <div className="modal fade" id="idCategoriaModal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="post-pixel-corners">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="idModalNombreC">Nombre de la categoría</h5>
                                    <small className="form-text">(Fandom/Original)</small>
                                    <button type="button" className="close dropdown-pixel-corners" data-bs-dismiss="modal" aria-label="Close">
                                        <label>X</label>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p id="idModalDescripcionC">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus finibus tempor. 
                                        Vivamus nec nunc dui. Sed vulputate, erat rhoncus tincidunt commodo, sem nisi accumsan purus, tincidunt maximus est ligula id magna. 
                                        Nam at convallis nibh, in tincidunt velit. Vestibulum non scelerisque ipsum, q
                                    </p>
                                </div>
                                <div className="modal-footer justify-content-between">
                                    <label id="idModalFechaC">DD/MM/AAAA</label>
                                    <label id="idModalFechaC">00:00</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categorias y Filtros */}
                <div id="idCategorias" className="col-2">
                    <h1>CATEGORÍAS</h1>
                    <div className="checkbox-categorias">
                        <a data-bs-toggle="collapse" href="#idListaTipos" role="button" aria-expanded="false" aria-controls="collapseExample" htmlFor="idTipo">
                            Tipo de Arte
                        </a>
                        <input className="form-check-input" type="checkbox" id="idTipo" name='tipo0' value="tipo0"
                            checked={checkedState.tipo0} 
                            onChange={handleChange} >
                        </input>
                    </div>
                    
                    <ul id="idListaTipos" className="collapse list-group list-group-flush">
                        <li className="list-group-item">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name='fandom' value="tipo0"
                                checked={checkedState.categorias.fandom} 
                                onChange={handleChange} >
                            </input>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Fandom</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name='original' value="tipo0"
                                checked={checkedState.categorias.original} 
                                onChange={handleChange} >
                            </input>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Arte Original</label>
                        </li>
                    </ul>

                    <div className="checkbox-categorias">
                        <a data-bs-toggle="collapse" href="#idListaFandom" role="button" aria-expanded="false" aria-controls="collapseExample" htmlFor="idTipo1">
                            Fandom
                        </a>
                        <input className="form-check-input" type="checkbox" id="idTipo1" name='tipo1' value="tipo1"
                            checked={checkedState.tipo1} 
                            onChange={handleChange} >
                        </input>
                    </div>

                    <ul id="idListaFandom" className="collapse list-group list-group-flush">
                        <li className="list-group-item">
                            <div>
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name='fandom1' value="tipo1"
                                    checked={checkedState.fandom.fandom1} 
                                    onChange={handleChange} >
                                </input>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Fandom 1</label>
                            </div>
                            <button id="btnInfoCategoria" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#idCategoriaModal">
                                <img src="Images/Icons/Info.png" alt="Información de la categoría"></img>
                            </button>
                        </li>
                    </ul>

                    <div className="checkbox-categorias">
                        <a data-bs-toggle="collapse" href="#idListaOriginal" role="button" aria-expanded="false" aria-controls="collapseExample" htmlFor="idTipo2">
                            Original
                        </a>
                        <input className="form-check-input" type="checkbox" id="idTipo2" name='tipo2' value="tipo2"
                            checked={checkedState.tipo2} 
                            onChange={handleChange} >
                        </input>
                    </div>

                    <ul id="idListaOriginal" className="collapse list-group list-group-flush">
                        <li className="list-group-item">
                            <div>
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name='original1' value="tipo2"
                                    checked={checkedState.original.original1} 
                                    onChange={handleChange} >
                                </input>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Original 1</label>
                            </div>
                            <button id="btnInfoCategoria" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#idCategoriaModal">
                                <img src="Images/Icons/Info.png" alt="Información de la categoría"></img>
                            </button>
                        </li>
                    </ul>

                    <h1>FILTROS</h1>

                    <h3>Fechas</h3>
                    <div className="filtro-fechas">
                        <label className="filtro-subtitulo">Desde:</label>
                        <input className="input-fecha comentario-pixel-corners" type="date" name="TXTDate"></input>
                        <label className="filtro-subtitulo">Hasta:</label>
                        <input className="input-fecha comentario-pixel-corners" type="date" name="TXTDate"></input>
                    </div>

                    <button id="btnFiltros" type="submit" className="comentario-pixel-corners">Aplicar filtros</button>
                </div>
                
                <div className="col col-derecha">
                    {/* Listas */}
                    <div className="listas-container">
                        <button className="scroll-btn left" onClick={() => moveList(-1)}>
                            <img src="/Images/Icons/Flecha.png" alt="Flecha izquierda"></img>
                        </button>

                        <div className="listas row">
                            <div className="link-lista lista-pixel-corners">
                                <a id="idLista" href="#">
                                    <img src="/Images/Templates/Camara_GO_1-1.png"
                                    className="lista-pixel-corners"
                                    alt="Imagen de la Lista" /> Nombre de la Lista
                                </a>
                            </div>
                        </div>

                        <button className="scroll-btn right" onClick={() => moveList(1)}>
                            <img src="/Images/Icons/Flecha.png" alt="Flecha derecha"></img>
                        </button>
                    </div>
                    
                    {/* Posts */}
                    <div id="idDashboard">
                        <div id="idPost">
                            <div className="post-contenedor">
                                <div className="post-usuario">
                                    <img id="idFotoUsuario" className="circular-pixel-corners" src="/Images/Templates/Usuario_blanco.png" alt="Foto de Perfil"></img>
                                    <label id="idTitulo" htmlFor="">Título de la imagen</label>
                                </div>
                                <div className="post-imagen pixel-corners">
                                    <button id="idModalPost" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#idModalPost">
                                        <img src="/Images/Templates/Post_1-1.png" alt="Template del Post"></img>
                                    </button>
                                </div>
                            </div>
                        </div>             
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Dashboard
