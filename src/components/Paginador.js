import React from 'react';

const Paginador = (prop) =>{
    return (
        <div className="py-3 row justify-content-center">
            <button onClick={prop.paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
            <button onClick={prop.paginaSiguiente} type="button" className="btn btn-info mr-1">Siguiente &rarr;</button>
        </div>
    );
}

export default Paginador;