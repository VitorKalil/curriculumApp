import React from "react"
import cards from "./Cards.json"

export default function Experiencias(props) {
    var idioma =props.idioma
    const [card,setCard] = React.useState(cards[0])
    const [porcentagem,setPorcentagem] = React.useState(0)
    React.useEffect(() =>{
        document.querySelectorAll('.iconeEsferico')[0].classList.add('selecionado')
    },[] )

    var novaPorcentagem
    function selecionarCard(evento){
        setCard(cards[evento.target.id]) /* ta dando bug se você clicka duas vezes no mesmo botão (não consegui reproduzir o bug (?))*/
        novaPorcentagem = 100*((evento.target.id)/(cards.length-1))
        for(let i = 0;i<cards.length;i++){ /* isso aqui serve para pintar as bolas antes do que foi selecionado*/
            i<=(evento.target.id) ? document.querySelectorAll('.iconeEsferico')[i].classList.add('selecionado'):document.querySelectorAll('.iconeEsferico')[i].classList.remove('selecionado')
        }
        setPorcentagem(novaPorcentagem)
    }
    var estilo = 'linear-gradient(to right, rgba(73, 100, 218,0) 0%, rgb(73, 100, 218) 8%, rgb(73, 100, 218) '+(porcentagem-8)+'%, rgba(73, 100, 218,0) '+(porcentagem)+'%)'
    var iconesCards = cards.map (card => <div className="icone" key={card.id} ><div className="iconeEsferico" id={card.id} onClick={selecionarCard}></div><p>{card.ano}</p></div>)
    /*colocar as imgens com cards.map*/
    var elementoCard = (
        <div className="cardTempo">
        <div className="cardContent orderTwo">
            <h2>{card.titulo}</h2>
            <em> {card.subtitulo}</em>
            <p>{card.texto}</p>
        </div>
        <div className="fotoCard orderOne">

        </div>
    </div>
    )

    return (
        <div id = "divExperiencias">
        <div id="linhaTempo" style = {{background:estilo}}></div>
        <div className ="listaIcones">
            {iconesCards} 
        </div>
            {elementoCard}
        </div>
    )
  }