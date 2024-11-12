import './sass/style.css'

function Group (props){
    return(
        <section className={props.class}>
            <h3>{props.name}</h3>
        </section>
    )
}

export default Group