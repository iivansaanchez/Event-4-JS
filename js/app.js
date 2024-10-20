// Rescatamos todos los botones que pulsaremos para mostrar las tarjetas relacionadas con ese lenguaje
const btnAll = document.querySelector("#all-btn");
const btnHtml = document.querySelector("#html");
const btnCss = document.querySelector("#css");
const btnPython = document.querySelector("#python");
const btnJava = document.querySelector("#java");

//Ahora rescatamos todas las card para usarlas posteriormente

//Card Java
const cardJava = document.querySelector(".card.d-flex.h-100.filterDiv.java");
// Card HtmlCss
const cardHtmlCss = document.querySelector(".card.h-100.filterDiv.html.css");
// Card Python/Html
const cardPyhtonHtml = document.querySelector(".card.d-flex.h-100.filterDiv.html.python");

// Función que ocultará y mostrará las tarjetas
function selectionAll(){
    cardJava.hidden = false;
    cardHtmlCss.hidden = false;
    cardPyhtonHtml.hidden = false;
}

// Función para el botón HTML
function selectionHtml(){
    cardJava.hidden = true;
    cardHtmlCss.hidden = false;
    cardPyhtonHtml.hidden = false;
    //cardJava.style.display = "hidden !important";
}

// Función para el botón CSS
function selectionCss(){
    cardJava.hidden = true;
    cardHtmlCss.hidden = false;
    cardPyhtonHtml.hidden = true;

}

// Función para el botón Python
function selectionPython(){
    cardJava.hidden = true;
    cardHtmlCss.hidden = true;
    cardPyhtonHtml.hidden = false;
}

// Función para el botón Java
function selectionJava(){
    cardJava.hidden = false;
    cardHtmlCss.hidden = true;
    cardPyhtonHtml.hidden = true;
}

// Eventos para los botones
btnAll.addEventListener('click', function(){
    selectionAll();
});
btnCss.addEventListener('click', function(){
    selectionCss();
});
btnHtml.addEventListener('click', function(){
    console.log("Pulsando html")
    selectionHtml();
});
btnJava.addEventListener('click', function(){
    selectionJava();
});
btnPython.addEventListener('click', function(){
    selectionPython();
});
