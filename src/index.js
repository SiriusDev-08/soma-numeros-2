import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './soma.css'; 
import SomaNum from './SomaTeste'; 

//Qual a diferença em importar {App} e importar App. 


ReactDOM.render(
  <React.StrictMode>
    <SomaNum /> 
  </React.StrictMode>,
  document.getElementById('root')
);


