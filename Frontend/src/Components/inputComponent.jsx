function InputComponent(props) {
    const { label, type, name, id, className, value, onChange } = props;

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                className={className}
                value={value} // Propaga el valor
                onChange={onChange} // Propaga el evento onChange
            />
        </>
    );
}

export default InputComponent;