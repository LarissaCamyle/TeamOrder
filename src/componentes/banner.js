import './sass/style.css'

function Banner () {
    return(
        <section className="banner">
            <div>
                <img src="/public/imagens/logoTeamOrder.png" alt="logo team order" />
                <h1>Organize seus times,<br/><span>otimize sua empresa</span></h1>
            </div>
            <img class='banner-img' src="/public/imagens/imgBannerTeamOrder.png" alt="imagem do banner"/>
        </section>
    );
}

export default Banner