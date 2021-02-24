import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  // defign news and categorie
  const [categoria, guardarCategoria] = useState("");
  const[noticias, guardarNoticias] = useState([]);

  useEffect (() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=6289215a1769481cb1e7bffaebff48e0`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Form guardarCategoria={guardarCategoria} />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
    
  );
}

export default App;
