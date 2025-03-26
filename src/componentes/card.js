import Group from "./group";

function Card (props){

    let divClass = `${props.class}-div`
    
    return(
        <section className={props.class}>
            <div className={divClass}></div>
            <div className="div-img">
                <img src={props.img}/>
            </div>
            <h2>{props.name}</h2>
            <h3>{props.position}</h3>
            <button className="deletar" onClick={props.aoDeletar}>Deletar</button>
        </section>
    )
}

export default Card;