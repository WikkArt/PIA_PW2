import PerfilUsuarioCSS from '../CSS/perfilUsuario.module.css'

function ListaGComponent(props) {
    
    const { id, dataBsToggle, dataBsTarget } = props
    
    return(
        <>
            <div id={id} className={PerfilUsuarioCSS["lista-grande"]}>
                <button className={PerfilUsuarioCSS["lista-pixel-corners"]} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget}>
                    <img src="/Images/Templates/Camara_1-1.png" className={PerfilUsuarioCSS["lista-img-pixel-corners"]} alt="Imagen de la Lista"></img>
                    <div>
                        <h3>Título de la Lista</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus finibus tempor. 
                            Vivamus nec nunc dui. Sed vulputate, erat rhoncus tincidunt commodo sem nisi accumsan 
                            purus tincidunt maximus. 
                        </p>
                    </div>
                </button>
            </div>
        </>
    )
}

export default ListaGComponent