import React from 'react';
import PropTypes from 'prop-types';


const Paginador = ({paginaAnterior,paginaSiguiente}) => {
    return (
        <div className="py-3 row justify-content-center">
            <button onClick={paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
            <button onClick={paginaSiguiente} type="button" className="btn btn-info mr-1">Siguiente &rarr;</button>
        </div>
    );
}

Paginador.propTypes = {
    paginaAnterior: PropTypes.func.isRequired,
    paginaSiguiente: PropTypes.func.isRequired,
};
export default Paginador;