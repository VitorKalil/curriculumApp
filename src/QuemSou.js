import foto from './foto.png'
import textos from "./Textos.json"

export default function QuemSou(props) {

  var idioma =props.idioma
    return (
      <div id="divInicial">
      <img src={foto} id="profilePic" alt='foto de perfil'/>
      <div id="profileIntro" className="textoMedio">
        <i> Vitor Kalil</i><br />
        <i> Front-end Webdesigner</i>
      </div>
      <p id="profileText" className="textoMedio">
        {textos[idioma]["texto-inicial"]["texto"]}
      </p>
    </div>
    )
  }