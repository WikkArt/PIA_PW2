import React, { useEffect, useRef,useState } from 'react';
import PerfilAdminCSS from '../../CSS/perfilAdmin.module.css';
import InputComponent from '../inputComponent';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModalEditarCateComponent(props) {
    const { className, id, tabIndex, role, ariaHidden, categoria, onCategoriaEditada } = props;
    const formRef = useRef();

    // Rellena el formulario cuando cambia la categoría
    useEffect(() => {
        if (categoria && formRef.current) {
            formRef.current.txtNameCate.value = categoria.nombre;
            formRef.current.categoriaDescripcion.value = categoria.descripcion || '';
            if (categoria.tipo_categoria === "Fandom") {
                formRef.current.inlineRadioOptions.value = "0";
            } else {
                formRef.current.inlineRadioOptions.value = "1";
            }
        }
    }, [categoria]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nombre = e.target.txtNameCate.value;
        const descripcion = e.target.categoriaDescripcion.value;
        const tipo_categoria = e.target.inlineRadioOptions.value === "0" ? "Fandom" : "Original";
        try {
            const response = await fetch(`http://localhost:3001/categorias/editar/${categoria.id_categoria}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, descripcion, tipo_categoria }),
            });
            const data = await response.json();
            if (response.ok) {
                 toast.success("Categoria editada correctamente");
                if (onCategoriaEditada) onCategoriaEditada(data);
                document.querySelector(`#${id} [data-bs-dismiss="modal"]`).click();
            } else {
                alert(data.error);
            }
        } catch (err) {
            toast.error('Error de conexión');
        }
    };

    return (
         <>
        <div className={className} id={id} tabIndex={tabIndex} role={role} aria-hidden={ariaHidden}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <form className={PerfilAdminCSS["post-pixel-corners"]} ref={formRef} onSubmit={handleSubmit}>
                    <div className={`modal-content ${PerfilAdminCSS["editar-content"]}`}>
                        <div className={`modal-header ${PerfilAdminCSS["editar-header"]}`}>
                            <h5 className="modal-title">Editar Categoría</h5>
                            <button type="button" className="close dropdown-pixel-corners" data-bs-dismiss="modal" aria-label="Close">
                                <label>X</label>
                            </button>
                        </div>
                        <div className={`modal-body ${PerfilAdminCSS["editar-body"]}`}>
                            <div className={`${PerfilAdminCSS["input-rb"]} row`}>
                                <div className='col'>
                                    <InputComponent
                                        label="Nombre de la Categoría"
                                        type="text"
                                        name="txtNameCate"
                                        id="txtNameCate"
                                        className={`${PerfilAdminCSS["cuadro-txt"]} col`}
                                        required
                                    />
                                </div>
                                <div id="idRB" name="idRB" className='col-4'>
                                    <label htmlFor="">Categoría</label>
                                    <div>
                                        <div className="form-check form-check-inline">
                                            <input className={`${PerfilAdminCSS.subcategoria} form-check-input`} type="radio" id="RBF" name="inlineRadioOptions" value="0" required />
                                            <label className="form-check-label" htmlFor="RBF">Fandom</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className={`${PerfilAdminCSS.subcategoria} form-check-input`} type="radio" id="RBO" name="inlineRadioOptions" value="1" />
                                            <label className="form-check-label" htmlFor="RBO">Original</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label htmlFor="">Descripción</label>
                            <textarea id="categoriaDescripcion" name="categoriaDescripcion" rows="3" className={PerfilAdminCSS["cuadro-txt"]} placeholder="Breve descripción..."></textarea>
                        </div>
                        <div className={`modal-footer ${PerfilAdminCSS["editar-footer"]}`}>
                            <button type="button" className={`btn ${PerfilAdminCSS["pixel-corners"]} ${PerfilAdminCSS["btn-secondary"]}`}
                                data-bs-dismiss="modal">
                                Cancelar
                            </button>
                            <button type="submit" className={`btn ${PerfilAdminCSS["pixel-corners"]} ${PerfilAdminCSS["btn-warning"]}`}>
                                Guardar Cambios
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
         </>
    );
}

export default ModalEditarCateComponent;