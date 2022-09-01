const iconoMenu=document.querySelector("#icono-menu"),
    menu= document.querySelector("#menu");

iconoMenu.addEventListener('click', (evento) => {
        menu.classList.toggle('active');
        document.body.classList.toggle('opacity');
    });


    