//promesas dan flexibilidad y capacidad de control de llamadas a la api 
//  se basa en un sistemas de peticiones y respuestas lo cual asegura que la comunicacion con el 
//servidor sea siempre constante
/* alert("por favor ir al menu y seleccionar lo que quieres ver ") */
window.addEventListener('DOMContentLoaded', init)

function changePage(counter = 1){
    let queryParams = new URLSearchParams(window.location.search)
    let url = window.location.pathname; //pathname es lo anterior al queryparams osea la url
    let currentPage = 1

    if(queryParams.get("page")){
        currentPage = +queryParams.get("page")
    }

    // moving to next/prev page
    currentPage += counter
    queryParams.set("page", currentPage)

    window.location.href = `${url}?${queryParams}`;
    // renderCharacteres(queryParams.get("gender"), queryParams.get("status"), currentPage);
}

function renderCharacteres(gender, status, page){
    gender = gender || ""
    status = status || ""
    page = page || 1

    const results = fetch(`https://rickandmortyapi.com/api/character?gender=${gender}&status=${status}&page=${page}`);

    results
        .then(response => response.json())   //traducir mis datos a un json 
        //hago otro .then para obtener mis datos, llamo al callback para obtenerlos
        .then(data => {
            const container = document.querySelector(".important-cards")
            container.innerHTML = "" 

            data & data.results.forEach(character => container.append(renderCharacter(character)))
        });
}

function init(){
    const params = new URLSearchParams(window.location.search)

    if (Array.from(params.keys()).length) {
        const container=document.querySelector(".important-cards")
        container.innerHTML = '<img class="rick loading" src="./img/image 10.png">' 

        renderCharacteres(params.get("gender"), params.get("status"), params.get("page"))
    } else {
        let arrowContainer = document.querySelector(".pagination-button-container")
        arrowContainer.style.display = "none"
    
    }
}


function renderCharacter(character) {
    // createRange: retorna un nuevo objeto
    const article= document.createRange().createContextualFragment(/*html*/
        `<div class="image-container">
            <h2 class="tittle-h2">${character.name}</h2>
            <div class="characters" >
                <img src="${character.image}" alt="Personaje">
            </div>
            <span id="info-gender">${character.gender}</span> 
            <span id="info-status">${character.status}</span>
        </div>`
    )

    return article
}

