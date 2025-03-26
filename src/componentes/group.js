import Card from './card'
import './sass/style.css'

function Group (props){

    let classCard = `card-${props.class}`

    //filtrar os colaboradores de acordo cm o nome do grupo para printar corretamente
    let collaboratorsFiltered = props.collaborators.filter(collaborator => collaborator.group === props.name)

    function deletarCard(){
        console.log("Deletando colaborador");
    }

    let corSecundaria;

    //se tiver colaboradores printa, se n tiver fica em branco
    if(collaboratorsFiltered.length > 0){
        
        return(
            <section className={props.class}>
                
                <input value={corSecundaria} onChange={evento => props.mudarCor(evento.target.value, props.class)} type='color' className='input-color'></input>
                <h3>{props.name}</h3>
                <section className='cards-list'>
                    {collaboratorsFiltered.map(collaborator =>
                        <Card 
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