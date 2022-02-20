import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './app.css'; 
import SomaNum from './App.js'; 

//Qual a diferença em importar {App} e importar App. 


ReactDOM.render(
  <React.StrictMode>
    <SomaNum /> 
  </React.StrictMode>,
  document.getElementById('root')
);


