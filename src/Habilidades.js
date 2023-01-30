import { createApi } from 'unsplash-js';
import React from 'react'

export default function Habilidades() {

  const [fotos,setFotos] = React.useState(0)
  const [palavra,setPalavra] = React.useState('japanese food')

  const unsplash = createApi({
    accessKey: 'Gu8dfEXUDsSxJIcI9dn0tcAtfbIZAI4nrtjnh_3jVzo',
    //fetch: nodeFetch,
  });
  React.useEffect(() => {
  unsplash.search.getPhotos({
    query: palavra,
    page: 1,
    perPage: 10,
  }).then(result => {
    const dados = result.response;
    setFotos(dados.results);
  });
  }
  )
  function procurar(event) {
    setPalavra(document.querySelector('#inputFoto').value)
    event.preventDefault();

  }

    return (
        <div id="divHabilidades">
          <div id="outraTentativa">
            <form>
              <input type="text" placeholder="cat" id='inputFoto'
              />
            <button onClick={procurar}>Procurar</button>
            </form>
          </div>
          <div id = "tentativa">
          {fotos!==0 && <img src={fotos[2].urls.raw} alt="fotos"></img>}
          </div>
 <svg
  className="waves"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 24 150 28"
  preserveAspectRatio="none"
  shapeRendering="auto"
>
  <defs>
    <path
      id="gentle-wave"
      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
    />
  </defs>
  <g className="parallax">
    <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(223, 18, 134,0.1)" />
    <use xlinkHref="#gentle-wave" x={48} y={2} fill="rgba(223, 18, 134,0.2)" />
    <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(223, 18, 134,0.4)" />
    <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(223, 18, 134,0.6)" />
    <use xlinkHref="#gentle-wave" x={48} y={7} fill="rgba(223, 18, 134,0.8)" />
  </g>
</svg>
  
      </div>
  
    )
  }