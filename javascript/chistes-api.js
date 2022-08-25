window.addEventListener('DOMContentLoaded', chistesAleatorios)

const botton = document.getElementById("onemore");

if(botton) {
    botton.addEventListener('click', chistesAleatorios)
}

function chistesAleatorios (){ 
    const endpoint="https://api.dadjokes.io/api/random/joke";

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            document.getElementById("chiste").textContent= data.body[0].setup
            document.getElementById("respuesta").textContent= data.body[0].punchline
        }).catch(error => {
            document.getElementById("chiste").textContent= "Uuuu, Parece que no hay chiste para ti"
        })
}