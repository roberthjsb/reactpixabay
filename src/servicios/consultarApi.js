
   const consultarApiAsync = async (termino,pagina)=>{
   const url =`https://pixabay.com/api/?key=13709262-4243aa5d48c02bc3e0e8824c1&q=${termino}&per_page=8&page=${pagina}`;
   const respuesta=await fetch(url);
    const resultado= await respuesta.json();
    return  resultado.hits;
 }
 export default consultarApiAsync;