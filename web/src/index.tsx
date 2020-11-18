import React from 'react';  //index.tsx é o 1o. a ser executado, ele chama o react
import ReactDOM from 'react-dom'; // chama o reactDom, integra c o react, ele chama a ReactDom.render
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
