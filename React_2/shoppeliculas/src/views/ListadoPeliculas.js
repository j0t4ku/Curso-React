
import { useEffect, useState } from 'react';
import Pelicula from './pelicula.js';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';

function ListadoPeliculas() {

  const [paginaAtual, setPaginaActual]= useState(1);
  const [peliculas, setPeliculas]= useState([]);
  const tpagina= 4;

  

  const buscarPeliculas = async () => {
    let url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';
    let result= await fetch(url, {
      "method": 'GET',
      "mode":'cors',
      "headers": {
        "Accept": 'application/jspn',
        "Content-Type": 'application/json',
        "Origin":'https://lucasmoy.dev/',
        "X-Requested-With": 'XMLHttpRequest'
      }
    });
    let json = await result.json();
    setPeliculas(json);
  }

  useEffect(() => {
    buscarPeliculas();
  }, []);


  function getTotalPagina () {
    let cantPel= peliculas.length;
    return (Math.ceil(cantPel / tpagina));
  }


  let peliculasPorPaginas= peliculas.slice((paginaAtual - 1) *  tpagina, 
  paginaAtual*tpagina);

  return (
    <PageWrapper>
      {
        peliculasPorPaginas.map((pelicula) => {
          return <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
              director={pelicula.director} actores={pelicula.actores}
              fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
                {pelicula.descripcion}
            </Pelicula>
        })
      }
      <Paginacion pagina={paginaAtual} total={getTotalPagina()} onChange={(pagina)=>{setPaginaActual(pagina)}} />
    </PageWrapper>
  );
}

export default ListadoPeliculas;
