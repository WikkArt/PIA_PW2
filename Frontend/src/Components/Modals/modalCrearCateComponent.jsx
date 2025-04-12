import PerfilAdminCSS from '../../CSS/perfilAdmin.module.css';
import InputComponent from '../inputComponent';

function ModalCrearCateComponent(props) {
    
    const { className, id, tabIndex, role, ariaHidden } = props
    
    return(
        <>
            <div className={className} id={id} tabIndex={tabIndex} role={role} aria-hidden={ariaHidden}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <form className={PerfilAdminCSS["post-pixel-corners"]}>
                        <div className={`modal-content ${PerfilAdminCSS["crear-content"]}`}>
                            <div className={`modal-header ${PerfilAdminCSS["crear-header"]}`}>
                                <h5 className="modal-title">Agregar Categoría</h5>
                                <button type="button" className="close dropdown-pixel-corners" data-bs-dismiss="modal" aria-label="Close">
                                    <label>X</label>
                                </button>
                            </div>
                            
                            <div className={`modal-body ${PerfilAdminCSS["crear-body"]}`}>
                                <div className={`${PerfilAdminCSS["input-rb"]} row`}>
                                    <div className='col'>
                                        <InputComponent 
                                            label="Nombre de la Categoría" 
                                            type="text"
                                            name="txtNameCate"
                                            id="txtNameCate"
                                            className={`${PerfilAdminCSS["cuadro-txt"]} col`}
                                        />
                                    </div>
                                    
                                    <div id="idRB" name="idRB" className='col-4'>
                                        <label htmlFor="">Categoría</label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <input className={`${PerfilAdminCSS.subcategoria} form-check-input`} type="radio" id="RBF" name="inlineRadioOptions" value="0"></input>
                                                <label className="form-check-label" htmlFor="RBF">Fandom</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className={`${PerfilAdminCSS.subcategoria} form-check-input`} type="radio" id="RBO" name="inlineRadioOptions" value="1"></input>
                                                <label className="form-check-label" htmlFor="RBO">Original</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <label htmlFor="">Descripción</label>
                                <textarea id="categoriaDescripcion" rows="3" className={PerfilAdminCSS["cuadro-txt"]}placeholder="Breve descripción..."></textarea>
                            </div>

                            <div className={`modal-footer ${PerfilAdminCSS["crear-footer"]}`}>
                                <button type="button" className={`btn ${PerfilAdminCSS["pixel-corners"]} ${PerfilAdminCSS["btn-secondary"]}`}
                                    data-bs-dismiss="modal">
                                    Cancelar
                                </button>
                                <button type="button" className={`btn ${PerfilAdminCSS["pixel-corners"]} ${PerfilAdminCSS["btn-warning"]}`}>
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default ModalCrearCateComponent