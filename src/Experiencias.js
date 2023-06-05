import React from "react"
import cards from "./Cards.json"

export default function Experiencias(props) {
    var idioma =props.idioma
    const [card,setCard] = React.useState(cards[idioma][0])
    const [porcentagem,setPorcentagem] = React.useState(8)
    React.useEffect(() =>{
        document.querySelectorAll('.iconeEsferico')[0].classList.add('selecionado')
    },[] )

    var novaPorcentagem
    function selecionarCard(evento){
        setCard(cards[idioma][evento.target.id])
        console.log(evento.target.id)
        console.log(cards[idioma].length)
        novaPorcentagem = 8+76*((evento.target.id)/(cards[idioma].length-1))
        for(let i = 0;i<cards[idioma].length;i++){
            i<=(evento.target.id) ? document.querySelectorAll('.iconeEsferico')[i].classList.add('selecionado'):document.querySelectorAll('.iconeEsferico')[i].classList.remove('selecionado')
        }
        setPorcentagem(novaPorcentagem)
    }
    var comprimento = porcentagem + "%"
    var iconesCards = cards[idioma].map (card => <div className="icone" key={card.id} ><div className="iconeEsferico" id={card.id} onClick={selecionarCard}></div><p>{card.ano}</p></div>)
    var elementoCard = (
        <div className="cardTempo">
        <div className="cardContent">
            <h2>{card.titulo}</h2>
            <em> {card.subtitulo}</em>
            <div className="flexCard" style = {{"flex-direction":card.orderCard}}>
                <div className="CardImage"><img src={card.imagem} alt={"slide " + card.id}></img></div>
                <p>{card.texto}</p>
            </div>
        </div>
    </div>
    )

    return (
        <div id = "divExperiencias">
        <div id="linhaTempo" style = {{width:comprimento}}></div>
        <div className ="listaIcones">
            {iconesCards} 
        </div>
            {elementoCard}
        </div>
    )
  }