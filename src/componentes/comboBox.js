import './sass/style.css'

function ComboBox (props) {
    console.log(props)

    return(
        <select class="select-group">
            {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                }
            )}

        </select>
    )
}

export default ComboBox;