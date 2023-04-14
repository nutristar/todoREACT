import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/index.css';
import App2 from './App2';
import App from './App';

let dogname="Gerakl"
let catname="Barsik"
const DialogsList = [{name:"Valera", id:1}, {name:"Shvidananda", id:2}, {name:"Chiy Hise Verelmish Kolbasa", id:3}, {name:"Svoprastartsy Agdriprtat Ivaneshovich", id:4},
{name:"Pan Gi Mun 2 2", id:5}, ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dogname={dogname} catname={catname} DialogsList={DialogsList}/>

  </React.StrictMode>
);

