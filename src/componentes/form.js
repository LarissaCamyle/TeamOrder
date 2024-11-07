import './sass/style.css'
import Input from './input.js';

function Form () {
    return(
        <form className='form'>
            <h1>Preencha os dados do colaborador</h1>
            <Input placeholder="Nome"/>
            <Input placeholder="Cargo"/>
            <Input placeholder="Imagem"/>
        </form>
    )
}

export default Form;