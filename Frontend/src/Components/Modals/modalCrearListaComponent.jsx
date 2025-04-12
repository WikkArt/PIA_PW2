import { mostrarAvatar } from '../../JS/mostrarAvatar.js'
import CrearListaCSS from '../../CSS/perfilUsuario.module.css'
import InputComponent from '../inputComponent.jsx'

function ModalCrearListaComponent(props) {
    
    const { className, id, tabIndex, role, ariaHidden } = props
    
    return(
        <>
            <div className={className} id={id} tabIndex={tabIndex} role={role} aria-hidden={ariaHidden}>
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <form className="post-pixel-corners">
                        <div className="modal-content">
                            <div className={`modal-header ${CrearListaCSS["lista-header"]}`}>
                                <h3>Nueva Lista</h3>
                                <button type="button" className="close dropdown-pixel-corners" data-bs-dismiss="modal" aria-label="Close">
                                    <label>X</label>
                                </button>
                            </div>

                            <div className={`modal-body ${CrearListaCSS["lista-body"]} row`}>
                                <div className={`${CrearListaCSS["fotos-container"]} col-8`}>
                                    <img id="idPortadaLista" src="/Images/Templates/Camara_GO_21-9.png"
                                    className="dropdown-pixel-corners" alt="Imagen de la Lista"></img>
                
                                    <input className={CrearListaCSS["form-control"]} type="file" id="btnPortada" name="btnPortada" 
                                    onChange={(event) => mostrarAvatar(event, 'idPortadaLista')} accept="image/*"></input>
                                </div>
                                
                                <div className={`${CrearListaCSS["texto-container"]} col`}>
                                    <InputComponent 
                                        label="Título de la Lista" 
                                        type="text"
                                        name="txtNameList"
                                        id="txtNameList"
                                        className={CrearListaCSS["cuadro-txt"]}
                                    />

                                    <label htmlFor="">Descripción</label>
                                    <textarea rows="5" className={CrearListaCSS["cuadro-txt"]} placeholder="Breve descripción..."></textarea>
                                    
                                    <button id="btnCrearLista" type="submit" className="dropdown-pixel-corners">Crear Lista</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalCrearListaComponent