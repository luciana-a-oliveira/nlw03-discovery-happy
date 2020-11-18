import React from 'react';


import './styles/global.css'; //pq qdo usamos o React tds as importações arq css de imagem ñ são importads pelo index.html, pq no React tds os arq de imagem

import 'leaflet/dist/leaflet.css';

import Routes from './routers'; 

//JSX - JavaScript XML é uma forma de incluir HTML dentro do JS
function App() { //componente (sao funçoes q retornam um jsx) App() 
  return (
    <Routes />
  );
}

export default App;
