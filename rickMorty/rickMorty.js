
//promesas dan flexibilidad y capacidad de control de llamadas a la api 
//  se basa en un sistemas de peticiones y respuestas lo cual asegura que la comunicacion con el 
//servidor sea siempre constante
function characteres(gender, status){
    const results = fetch(
        // using query params
        `https://rickandmortyapi.com/api/character?gender=${gender || ""}&status=${status || ""}`
    );

    //traducir mis datos a un json 
    results
        .then(response => response.json())
        //hago otro .then para obtener mis datos, llamo al callback para obtenerlos
        .then(data => {
            data && data.results.forEach(personaje => {
                // createRange: retorna un nuevo objeto
                const article= document.createRange().createContextualFragment(/*html*/
                    `<article id="box-blue">
                        <div class="image-container">
                            <img src="${personaje.image}" alt="Personaje">
                        </div>
        
                        <h2>${personaje.name}</h2>
                        <span>${personaje.status}</span>
                    </article>`
                );
            
                const information=document.querySelector(".important-cards")
                information.append(article);
            });
        });
}

const params = new URLSearchParams(window.location.search) //me sirve para obtener los queryparams
characteres(params.get("gender"), params.get("status"))