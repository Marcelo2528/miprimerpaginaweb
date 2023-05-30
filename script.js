// encuntra el elemento html(el boton) mediante su Id
const miBoton = document.getElementById('miBoton');

//definimos la funcion que se llamara una ves que se haga click en el boton
function handleClick(){

    alert(' Menu ')
}

miBoton.addEventListener("click", handleClick);






document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})

