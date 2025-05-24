function ListaCateComponent(props) {
    const { label, name, value, checked, onChange, dataBsToggle, dataBsTarget, onInfoClick } = props;

    return (
        <>
            <li className="list-group-item">
                <div>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name={name} value={value}
                        checked={checked}
                        onChange={onChange} >
                    </input>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">{label}</label>
                </div>
                <button
                    id="btnInfoCategoria"
                    className="btn btn-primary"
                    data-bs-toggle={dataBsToggle}
                    data-bs-target={dataBsTarget}
                    onClick={onInfoClick}
                >
                    <img src="Images/Icons/Info.png" alt="Información de la categoría"></img>
                </button>
            </li>
        </>
    )
}

export default ListaCateComponent
