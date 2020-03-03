import React,{Component} from 'react';

class Buscador extends Component {
    constructor(props){
        super(props);
        this.busquedaRef = React.createRef();
        this.obtenerDatos = (e)=>{
            e.preventDefault();
            const termino =this.busquedaRef.current.value;
            console.log('termino: ',termino);
            this.props.datosBusqueda(termino);
        }
    }
    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-groupd col-md-8">
                        <input  ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Buscar tu Imagen" />
                    </div>
                    <div className="form-groupd col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block"  value="Buscar..."/>
                    </div>
                </div>
            </form>
        )
    }
}
export default Buscador;