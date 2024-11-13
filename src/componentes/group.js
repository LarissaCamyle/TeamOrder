import Card from './card'
import './sass/style.css'

function Group (props){

    let classCard = `card-${props.class}`
    return(
        <section className={props.class}>
            <h3>{props.name}</h3>
            <section className='cards-list'>
                {props.collaborators
                //filtrar os colaboradores de acordo cm grupo para printar corretamente
                .filter(collaborator => collaborator.group === props.name)
                .map(collaborator =>
                    <Card 
                        class={classCard}
                        name={collaborator.name}
                        position={collaborator.position}
                        img={collaborator.img}
                        group={collaborator.group}
                    />)
                }
            </section>
        </section>
    )
}

export default Group