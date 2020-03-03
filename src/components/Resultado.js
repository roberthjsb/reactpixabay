import React,{Component} from 'react';
import Imagen from './Imagen';
import Paginador from './Paginador';



class Resultado extends Component {
    mostrarimagenes = ()=>{ 
        const imagenes = this.props.imagenes;
        if(imagenes.length===0)
        { return null}
        else{
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {
                        imagenes.map((imagen) =>(
                            <Imagen 
                                key={imagen.id}
                                imagen={imagen}
                            />
                        ))
                    }
                </div>
                <Paginador
                    paginaAnterior= {this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                ></Paginador>
            </React.Fragment>
        );
    }
    }
    render(){
        console.log('render Resultado');
        return (
            <React.Fragment>
                {this.mostrarimagenes()}
            </React.Fragment>
        )
    }
}
export default Resultado;