function InputComponent(props) {
    
    const { label, type, name, id, className } = props
    
    return(
        <>
            <label htmlFor="">{label}</label>
            <input type={type} name={name} id={id} className={className}>
            </input>
        </>
    )
}

export default InputComponent
            