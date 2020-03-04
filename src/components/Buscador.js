import React, { useState } from 'react';
import Error from '../components/Error';
import PropTypes from 'prop-types';

// class Buscador extends Component {
//     constructor(props){
//         super(props);
//         this.busquedaRef = React.createRef();
//         this.obtenerDatos = (e)=>{
//             e.preventDefault();
//             const termino =this.busquedaRef.current.value;
//             console.log('termino: ',termino);
//             this.props.datosBusqueda(termino);
//         }
//     }
//     render() {
//         return (
//             <form onSubmit={this.obtenerDatos}>
//                 <div className="row">
//                     <div className="form-groupd col-md-8">
//                         <input  ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Buscar tu Imagen" />
//                     </div>
//                     <div className="form-groupd col-md-4">
//                         <input type="submit" className="btn btn-lg btn-danger btn-block"  value="Buscar..."/>
//                     </div>
//                 </div>
//             </form>
//         )
//     }
// }

const Buscador = ({ datosBusqueda }) => {
    const [termino, setTermino] = useState('');
    const [error, setError] = useState(false);
    const obtenerDatos = (e) => {
        e.preventDefault();
        if (termino.trim() === '') { setError(true); return; }
        setError(false);
        datosBusqueda(termino);
    }
    const handlerchange=(e)=>{
        setTermino(e.target.value);
    }
    return (
        <form onSubmit={obtenerDatos}>
            <div className="row">
                <div className="form-groupd col-md-8">
                    <input onChange={handlerchange} type="text" className="form-control form-control-lg" placeholder="Buscar tu Imagen" />
                </div>
                <div className="form-groupd col-md-4">
                    <input 
                    type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..." />
                </div>
            </div>
            {error ? <Error mensaje="Agrega un termino de busqueda" /> : null}
        </form>
    )
}
Buscador.propTypes = {
    datosBusqueda: PropTypes.func.isRequired
};
export default Buscador;