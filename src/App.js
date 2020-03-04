/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      termino:'',
      imagenes:[],
      pagina: ''
    }
    this.datosBusqueda = this.datosBusqueda.bind(this)
  }
  paginaAnterior = ()=>{
    // let pagina = this.state.pagina;
    // if( pagina===1 ) return null;
    // pagina -=1;
    // this.setState({pagina}, ()=>{
    //   this.consultarApi();
    //   this.scroll();
    // })
  }
  paginaSiguiente = ()=>{
    // let pagina = this.state.pagina;
    // pagina +=1;
    // this.setState({pagina},()=>{
    //   this.consultarApi();
    //   this.scroll();
    // })
  }
  scroll = () =>{
    // const element = document.querySelector('.jumbotron');
    // element.scrollIntoView('smooth','start');
  }

  //  consultarApi = (termino,pagina)=>{
  //    debugger
  //   const url =`https://pixabay.com/api/?key=13709262-4243aa5d48c02bc3e0e8824c1&q=${termino}&per_page=8&page=${pagina}`;
  //   console.log(url);
  //   fetch(url)
  //     .then(respuesta => respuesta.json())
  //     .then(resultado => {
  //       console.log(resultado.hits[0]);
  //       this.setState({imagenes: resultado.hits})
  //     } );
  // }
 
  datosBusqueda (termino) {
  //  this.setState({
  //   termino:termino,
  //    pagina:1
  //  }.bind(this),
  //  ()=> this.consultarApi()
  //  )
  }
  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} ></Buscador>
      </div>
        {/* <Resultado 
            imagenes={this.state.imagenes}
            paginaAnterior= {this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
        ></Resultado> */}
      </div>
    );
  }
}

export default App;
