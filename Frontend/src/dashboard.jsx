import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './CSS/bootstrap.min.css';
import './CSS/dashboard.css';
import './JS/bootstrap.bundle.min.js';
import './JS/jquery-3.7.1.min.js';
import ModalCateComponent from './Components/Modals/modalCateComponent.jsx';
import ModalPostComponent from './Components/Modals/modalPostComponent.jsx';
import ModalListaComponent from './Components/Modals/modalListaComponent.jsx';
import ListaCateComponent from './Components/listaCateComponent.jsx';
import ListasSComponent from './Components/listaSComponent.jsx';
import PostComponent from './Components/postComponent.jsx';

function Dashboard() {
    // Barra de Busqueda


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
                    <input type="text" placeholder='Buscar...'></input>
                    <button id="idNavBuscar">
                        <img src="/Images/Icons/Buscar.png" alt="Buscador"></img>
                    </button>

                    <ul id='idHistorialBusqueda' className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            Búsqueda 1
                        </li>
                        <li className='list-group-item'>
                            Búsqueda 2
                        </li>
                        <li className='list-group-item'>
                            Búsqueda 3
                        </li>
                        <li className='list-group-item'>
                            Búsqueda 4
                        </li>
                        <li className='list-group-item'>
                            Búsqueda 4
                        </li>
                    </ul>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link" to="/login">Iniciar Sesión</Link>
                </li>
                <li className="nav-item nav-right">
                    <Link className="nav-link" to="/registro">Registro</Link>
                </li>
            </ul>
            
            {/* Modal de la Informacion de las Categorias */}
            <ModalCateComponent
                className="modal fade"
                id="idCategoriaModal"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalCateComponent>

            {/* Modal de Posts */}
            <ModalPostComponent
                className="modal fade"
                id="idModalPost"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalPostComponent>

            {/* Modal de Listas */}
            <ModalListaComponent
                className="modal fade"
                id="idModalLista"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            ></ModalListaComponent>

            <div className="cuerpo">
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
                        <ListaCateComponent
                            label="Fandom 1"
                            name="fandom1"
                            value="tipo1"
                            checked={checkedState.fandom.fandom1}
                            onChange={handleChange}
                            dataBsToggle="modal"
                            dataBsTarget="#idCategoriaModal"
                        ></ListaCateComponent>
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
                        <ListaCateComponent
                            label="Original 1"
                            name="original1"
                            value="tipo2"
                            checked={checkedState.original.original1}
                            onChange={handleChange}
                            dataBsToggle="modal"
                            dataBsTarget="#idCategoriaModal"
                        ></ListaCateComponent>
                    </ul>

                    <h1>FILTROS</h1>

                    <div className='filtro-likes'>
                        <input className="form-check-input" type="checkbox" id="chbLikes" name='chbLikes'></input>
                        <label className="form-check-label" htmlFor="chbLikes">Favoritos de la Comunidad</label>
                    </div>

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
                            <ListasSComponent
                                className="link-lista lista-pixel-corners"
                                id="idLista"
                                src="/Images/Templates/Camara_GO_1-1.png"
                                dataBsToggle="modal"
                                dataBsTarget="#idModalLista"
                            ></ListasSComponent>
                        </div>

                        <button className="scroll-btn right" onClick={() => moveList(1)}>
                            <img src="/Images/Icons/Flecha.png" alt="Flecha derecha"></img>
                        </button>
                    </div>
                    
                    {/* Posts */}
                    <div id="idDashboard">
                        <PostComponent
                            id="idPost"
                            dataBsToggle="modal"
                            dataBsTarget="#idModalPost"
                        ></PostComponent>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Dashboard
