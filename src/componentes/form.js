import './sass/style.css'
import Input from './input.js';
import ComboBox from './comboBox.js';
import Button from './button.js';

function Form () {

    const groups = [
        'UX / UI',
        'Front-End',
        'Back-End',
        'Data Science'
    ]

    const formSubmit = (evento) => {
        evento.preventDefault();
        alert("a")
    }

    return(
        <form onSubmit={formSubmit} className='form'>
            <h1>Preencha os dados do colaborador</h1>
            <Input inputRequired={true} placeholder="Nome"/>
            <Input inputRequired={true} placeholder="Cargo"/>
            <Input placeholder="Imagem"/>
            <ComboBox itens={groups}/>
            <Button >
                Criar Card
            </Button>
        </form>
    )
}

export default Form;