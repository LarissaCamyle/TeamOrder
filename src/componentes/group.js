import { useState } from 'react';
import Card from './card'
import './sass/style.css'

function Group (props){

    let classCard = `card-${props.class}`

    const [corBack, setCorBack] = useState('');
    const [corCard, setCorCard] = useState('');

    //filtrar os colaboradores de acordo cm o nome do grupo para printar corretamente
    let collaboratorsFiltered = props.collaborators.filter(collaborator => collaborator.group === props.name)

    function deletarCard(){
        console.log("Deletando colaborador");
    }

    //transformando a cor de hex para rgb com menos opacidade
    function hexToRgb(valor){
        valor = valor.replace('#', '');

        var r= parseInt(valor.substring(0,2), 16);
        var g= parseInt(valor.substring(2,4), 16);
        var b= parseInt(valor.substring(4,6), 16);

        return `rgb(${r},${g},${b},0.5)`
    }

    //se tiver colaboradores printa, se n tiver fica em branco
    if(collaboratorsFiltered.length > 0){
        return(
            <section className={props.class}>
                
                <input value={corBack} onChange={evento => {
                    //cor do pick color
                    const corDoBackground = evento.target.value;
                    //cor do card
                    setCorCard(hexToRgb(evento.target.value))
                    //muda as cores
                    props.mudarCor(corDoBackground, corCard , props.class, props)

                    setCorBack(evento.target.value)
                }}
                type='color' className='input-color'></input>

                <h3>{props.name}</h3>
                <section className='cards-list'>
                    {collaboratorsFiltered.map(collaborator =>
                        <Card 
                            cor={corCard}
                            class={classCard}
                            name={collaborator.name}
                            position={collaborator.position}
                            img={collaborator.img}
                            group={collaborator.group}
                            key={collaborator.name}
                            aoDeletar={deletarCard}
                        />)
                    }
                </section>
            </section>
        )
    }
   
}

export default Group