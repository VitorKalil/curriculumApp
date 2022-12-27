import foto from './foto.jpg'
export default function QuemSou() {
    return (
      <div id="divInicial">
      <img src={foto} id="profilePic" alt='foto de perfil'/>
      <div id="profileIntro" className="textoMedio">
        <i> Vitor Kalil</i><br />
        <i> Front-end Webdesigner</i>
      </div>
      <p id="profileText" className="textoMedio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor tincidunt sapien, et malesuada nisl tempor at. Donec malesuada, ipsum in commodo condimentum, mi nulla faucibus neque, vitae imperdiet eros arcu tincidunt ex. Integer rutrum ornare justo sed mattis. Nulla a odio vel nisi tristique pretium eget et neque. Mauris blandit rutrum risus, sit amet interdum leo mattis quis. Phasellus pharetra sed lacus a volutpat. Vivamus aliquet magna tellus. Maecenas consectetur finibus metus quis convallis. Vivamus enim lacus, scelerisque nec lorem ac, ornare condimentum justo. Pellentesque ut diam ut nunc egestas rhoncus a non metus. Etiam aliquam varius ornare.
        Suspendisse lobortis aliquam posuere. Maecenas convallis, nisi a sollicitudin vulputate, nibh erat tincidunt augue, sit amet luctus felis libero at risus. Integer ac suscipit augue, et porttitor purus. Maecenas rutrum orci at enim vehicula, ut pharetra felis hendrerit. In tempor, magna in tempus vehicula, enim lectus fermentum urna, ac mollis diam neque id ante. In eleifend nulla ultricies, ultrices metus a, dignissim urna. Donec non sollicitudin libero, et tristique est.
      </p>
    </div>
    )
  }