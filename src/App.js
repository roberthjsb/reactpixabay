/* eslint-disable no-unused-vars */
import React, {
  useState, useEffect
} from 'react';
import Buscador from './components/Buscador';
import Paginador from './components/Paginador';
import Imagen from './components/Imagen';
import consultarApi from './servicios/consultarApi';

function App() {
  let [pagina, setPagina] = useState(1);
  const [datosBusqueda, setDatosBusqueda] = useState('');
  const [imagenes, setImagenes] = useState([]);

    const paginaAnterior = () => {
      if (pagina === 0) return ;
      setPagina(pagina - 1);
  };
  
    const paginaSiguiente = () => {
      if (imagenes.length === 0) return null;
      setPagina(pagina + 1);
    };

  useEffect(() => {
    if (datosBusqueda === '') return;
    const imagenesPorPaginas = 8;
    consultarApi(datosBusqueda, pagina, imagenesPorPaginas)
        .then(resp => setImagenes(resp));
  }, [datosBusqueda, pagina]);
  
  return (
    <div className="App container" >
      <div className="jumbotron" >
        <p className="lead text-center" > Buscador de imágenes </p>
        <Buscador datosBusqueda={setDatosBusqueda} />
      </div>
      <div className="col-12 p-5 row">
        {imagenes.map((imagen) => <Imagen key={imagen.id} imagen={imagen} />)}
      </div>
      {
        imagenes.length > 0 &&<Paginador paginaAnterior={paginaAnterior} paginaSiguiente={paginaSiguiente} />
      }
    </div>
  );
}
export default App;