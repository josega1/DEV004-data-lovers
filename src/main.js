

const botton = document.querySelector('button_players');
const menu = document.querySelector('menu');
const input = document.querySelector('input');
botton.addEventListener('click', (e) => {
    e.preventDefault();
    data(input.value);
})

// console.log(datos);
function data(Jugador){
    fetch(`./data/datos.json/${Jugador}`).then(response => response.json()).then(data => createPlayers(data)).catch(error => console.error(error));
    
    createPlayers(Jugador);
}

function createPlayers(Jugador) {
    const img = document.createElement('img');
    img.src = Jugador.image;

    const h3 = document.createElement('h3');
    h3.textContent = Jugador.name;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    menu.appendChild(div)
}
