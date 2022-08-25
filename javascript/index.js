// modo dark and light

const buttonChange=document.getElementById("button-change");
buttonChange.addEventListener("click",changeColor)

function changeColor(){
    let html=document.querySelector("html")
    html.classList.toggle("dark");
}
