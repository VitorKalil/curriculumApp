import './App.css';
import QuemSou from './QuemSou'
import Habilidades from './Habilidades'
import Experiencias from './Experiencias'
import React from 'react';
import './index.css'


function App() {
  var paginas = {'home':<QuemSou />,'habilidades':<Habilidades />,'Experiencias':<Experiencias />} //defining the pages as an object, that relates the id of the button to the JX object
  const [pagina,setPagina]=React.useState('home') // starting the state for wich page should be shown
  
  function trocarPagina(evento){
    setPagina(evento.target.id)
  }
  var paginaAtual = paginas[pagina]

  return (
    <div className="App">
        <nav className="navbar">
      <ul className="lista">
        <li onClick ={trocarPagina} id ="home">Home</li>
        <li onClick ={trocarPagina} id ="habilidades">Habilidades</li>
        <li onClick ={trocarPagina} id ="Experiencias">Experiências</li>
      </ul>
    </nav>
      {paginaAtual}
    </div>
  );
}

export default App;
