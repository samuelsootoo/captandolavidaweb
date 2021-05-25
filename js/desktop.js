let $menu = document.getElementById("movil_nav_contacto");

function contactanos() {

    if (document.getElementById("contacto").style.display == "none"){

        document.getElementById("principal").style.display = "none";
        document.getElementById("reservas").style.display = "none";
        document.getElementById("contacto").style.display = "flex";
        document.getElementById("quienesSomos").style.display = "none";
        document.getElementById("redesSociales").style.display = "none";

    } else {

        document.getElementById("principal").style.display = "block";
        document.getElementById("reservas").style.display = "none";
        document.getElementById("contacto").style.display = "none";
        document.getElementById("quienesSomos").style.display = "none";
        document.getElementById("redesSociales").style.display = "none";

    }
}

function reservas() {
    if (document.getElementById("reservas").style.display == "none"){
        
        document.getElementById("principal").style.display = "none";
        document.getElementById("reservas").style.display = "flex";
        document.getElementById("contacto").style.display = "none";
        document.getElementById("quienesSomos").style.display = "none";
        document.getElementById("redesSociales").style.display = "none";

    } else {

        document.getElementById("principal").style.display = "block";
        document.getElementById("reservas").style.display = "none";
        document.getElementById("contacto").style.display = "none";
        document.getElementById("quienesSomos").style.display = "none";
        document.getElementById("redesSociales").style.display = "none";
    }
    
}

function quienesSomos() {
    if (document.getElementById("quienesSomos").style.display == "none"){
        
        document.getElementById("principal").style.display = "none";
        document.getElementById("reservas").style.display = "none";
        document.getElementById("contacto").style.display = "none";
        document.getElementById("quienesSomos").style.display = "grid";
        document.getElementById("redesSociales").style.display = "none";

    } else {

        document.getElementById("principal").style.display = "block";
        document.getElementById("reservas").style.display = "none";
        document.getElementById("contacto").style.display = "none";
        document.getElementById("quienesSomos").style.display = "none";
        document.getElementById("redesSociales").style.display = "none";
    }
}

function redesSociales() {
    if (document.getElementById("redesSociales").style.display == "none"){
        
        document.getElementById("principal").style.display = "none";
        document.getElementById("reservas").style.display = "none";
        document.getElementById("contacto").style.display = "none";
        document.getElementById("quienesSomos").style.display = "none";
        document.getElementById("redesSociales").style.display = "grid";

    } else {

        document.getElementById("principal").style.display = "block";
        document.getElementById("reservas").style.display = "none";
        document.getElementById("contacto").style.display = "none";
        document.getElementById("quienesSomos").style.display = "none";
        document.getElementById("redesSociales").style.display = "none";
    }
}

function inicio() {
    
    if (window.matchMedia("(min-width: 600px)").matches) {
        document.getElementById("movil_nav_contacto").style.display = "block";
    }
    else {
        document.getElementById("movil_nav_contacto").style.display = "none";
    }
    
    document.getElementById("principal").style.display = "block";
    document.getElementById("reservas").style.display = "none";
    document.getElementById("contacto").style.display = "none";
    document.getElementById("quienesSomos").style.display = "none";
    document.getElementById("redesSociales").style.display = "none";
}

function menu() {
    document.getElementById("movil_nav_contacto").style.display = "block";
    setTimeout(function() {
        document.getElementById("movil_nav_contacto").style.display = "none";
    }, 5000);

}

function desaparecer() {
    document.getElementById("movil_nav_contacto").style.display = "none";
}