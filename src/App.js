import './App.css';
import QuemSou from './QuemSou'
import Habilidades from './Habilidades'
import Experiencias from './Experiencias'
import React from 'react';
import './index.css'
import lg_ico from './language_icon.png'
import textos from "./Textos.json"

function App() {
  const [lang,setLang] = React.useState('en')
  var paginas = {'home':<QuemSou idioma={lang} />,'habilidades':<Habilidades idioma={lang} />,'Experiencias':<Experiencias idioma={lang}/>} //defining the pages as an object, that relates the id of the button to the JX object
  const [pagina,setPagina]=React.useState('home') // starting the state for wich page should be shown
  function trocarPagina(evento){
    setPagina(evento.target.id)
  }

  function trocarLang(evento){
    setLang(evento.target.id)
  }
  var paginaAtual = paginas[pagina]

  return (
    <div className="App">
        <nav className="navbar">
      <ul className="lista">
        <li onClick ={trocarPagina} id ="home">{textos[lang]["Quem Sou"]}</li>
        <li onClick ={trocarPagina} id ="habilidades">{textos[lang]["Experimentacao"]}</li>
        <li onClick ={trocarPagina} id ="Experiencias">{textos[lang]["Historico"]}</li>
        <li> <img src={lg_ico} id="logo_header" alt="language_logo"></img>
          <ul id="language_menu">
            <li id="pt" onClick={trocarLang}>Português</li>
            <li id="en" onClick={trocarLang}>English</li>
            <li id="it" onClick={trocarLang}>Italiano</li>
            <li id="de" onClick={trocarLang}>Deutsch</li>
          </ul>
        </li>
      </ul>
    </nav>
      {paginaAtual}
    </div>
  );
}

export default App;
