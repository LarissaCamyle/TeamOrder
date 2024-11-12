import './sass/style.css'
import Input from './input.js';
import ComboBox from './comboBox.js';
import Button from './button.js';
import { useState } from 'react';

function Form (props) {

    //um tipo de variavel q armazena com o value
    //e tem a funcao de alterar o conteudo com o setValue
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [img, setImg] = useState('')
    const [group, setGroup] = useState('')

    const groups = [
        'UX / UI',
        'Front-End',
        'Back-End',
        'Data Science'
    ]

    const formSubmit = (evento) => {
        evento.preventDefault();
        props.registeredCollaborator({
            name,
            position,
            img,
            group
        })
    }

    return(
        <form onSubmit={formSubmit} className='form'>
            <h1>Preencha os dados do colaborador</h1>
            <Input
                inputRequired={true} 
                placeholder="Nome"
                value={name}
                whenChange={value => setName(value)}
            />
            <Input 
                inputRequired={true} 
                placeholder="Cargo"
                value={position}
                whenChange={value => setPosition(value)}
            />
            <Input 
                placeholder="Imagem"
                value={img}
                whenChange={value => setImg(value)}
            />
            <ComboBox 
                inputRequired={true} 
                itens={groups}
                value={group}
                whenChange={value => setGroup(value)}
            />
            <Button >
                Criar Card
            </Button>
        </form>
    )
}

export default Form;