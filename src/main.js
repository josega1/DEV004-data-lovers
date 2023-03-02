// import data from './data/data.json';
// import { datos }  from './data/datos.js';
const url = './data/datos.json'

// console.log(datos);

fetch(url).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));
document.createElement('div')
document.createAttribute('#', 'id')