import React from 'react';
import Imagen from './Imagen';
import Paginador from './Paginador';
import PropTypes from 'prop-types';
const Resultado =(props)=> {
        const imagenes = props.imagenes;
        return (
            <React.Fragment>
            <div className="col-12 p-5 row">
                { imagenes.map((imagen) =><Imagen key={imagen.id} imagen={imagen}/>)}
            </div>
            <Paginador
                // paginaAnterior= {this.props.paginaAnterior}
                // paginaSiguiente={this.props.paginaSiguiente}
            ></Paginador>
        </React.Fragment>
        )
}
Resultado.propTypes = {
    imagenes: PropTypes.string.isRequired
};
export default Resultado;