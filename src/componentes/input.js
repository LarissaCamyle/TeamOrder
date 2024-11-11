function Input (props) {
    return(
        //     se for true o campo se torna obrigatorio
        <input required={props.inputRequired} placeholder={props.placeholder}></input>
    )
}

export default Input