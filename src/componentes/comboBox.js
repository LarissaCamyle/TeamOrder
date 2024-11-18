import './sass/style.css'

function ComboBox (props) {
    return(
        <select 
            onChange={event => props.whenChange(event.target.value )} 
            value={props.value} 
            required={props.inputRequired} 
            class="select-group">
                
            {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                }
            )}

        </select>
    )
}

export default ComboBox;