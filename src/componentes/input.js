function Input (props) {

    const whenTyping = (event) => {
        //chama a funcao
        props.whenChange(event.target.value)
    }

    return(
        //                                               se for true o campo se torna obrigatorio
        //                        se digitar chama a funcao 
        <input value={props.value} onChange={whenTyping} required={props.inputRequired} placeholder={props.placeholder}></input>
    )
}

export default Input