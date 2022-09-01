
//promesas dan flexibilidad y capacidad de control de llamadas a la api 
//  se basa en un sistemas de peticiones y respuestas lo cual asegura que la comunicacion con el 
//servidor sea siempre constante
/* alert("por favor ir al menu y seleccionar lo que quieres ver ") */

/* window.addEventListener('DOMContentLoaded',function(){
   let info= querySelector(".important-cards").innerHTML="";
})
 */

function nextPage(){
    let queryParams = new URLSearchParams(window.location.search)
    let url = window.location.pathname; //pathname es lo anterior al queryparams osea la url
    let currentPage = 1

    if(queryParams.get("page")){
        currentPage = +queryParams.get("page")
    }

    // moving to next page
    currentPage += 1

    queryParams.set("page", currentPage)

    window.location.href = `${url}?${queryParams}`;
}

function characteres(gender, status, page){
    gender = gender || ""
    status = status || ""
    page = page || "1"


    const results = fetch(
        // using query params
        `https://rickandmortyapi.com/api/character?gender=${gender}&status=${status}&page=${page}`
    );

    //traducir mis datos a un json 
    results
        .then(response => response.json())
        //hago otro .then para obtener mis datos, llamo al callback para obtenerlos
        .then(data => {
            document.querySelector(".important-cards").innerHTML = ""
            data & data.results.forEach(personaje => {
                // createRange: retorna un nuevo objeto
                const article= document.createRange().createContextualFragment(/*html*/
                    `<article id="box-blue">
                        <div class="image-container">
                            <h2 class="tittle-h2">${personaje.name}</h2>
                            <div class="characters" >
                                <img src="${personaje.image}" alt="Personaje">
                            </div>
                            <span id="info-gender">${personaje.gender}</span> 
                            <span id="info-status">${personaje.status}</span>
                        </div>   
                    </article>`
                );
            
                const information=document.querySelector(".important-cards")
                information.append(article);
            });
        });
}

const params = new URLSearchParams(window.location.search) 
characteres(params.get("gender"), params.get("status"), params.get("page"))

