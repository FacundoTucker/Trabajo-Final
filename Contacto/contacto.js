"use strict";

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let documento = document.getElementById("documento");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let comentario = document.getElementById("comentario");

let botonEnviar = document.getElementById("enviar");
let informacion = [];

botonEnviar.addEventListener("click", (e)=>{
    e.preventDefault(); //previene la accion del form de actualizar la pagina
    informacion[0] = nombre.value;
    informacion[1] =" " + apellido.value;
    informacion[2] =" " + documento.value;
    informacion[3] =" " + email.value;
    informacion[4] =" " + telefono.value;
    informacion[5] =" " + comentario.value;

    let blob = new Blob(informacion, {type: "text/plain;charset=utf-8"}); //informacion con corchetes para que los separe
    
    if(informacion[5] !== " " && informacion[0] !== " " && informacion[1] !== " "  && informacion[2] !== " " && informacion[3] !== " "  && informacion[4] !== " "){
        saveAs(blob, "contacto.txt"); //libreria FileServer.js
        mostrarMensajeComentarioExitoso();
        ocultarMensajeError();
    } else {
        mostrarMensajeComentarioError();
    }
    
})

function mostrarMensajeComentarioExitoso() {
    let elemento = document.querySelector(".mensajeComentarioExitoso");
    elemento.classList.add("mostrarMensaje");
}

function mostrarMensajeComentarioError() {
    let elemento = document.querySelector(".mensajeComentarioError");
    elemento.classList.add("mostrarMensaje");
}

function ocultarMensajeError() {
    let elemento = document.querySelector(".mensajeComentarioError");
    elemento.classList.remove("mostrarMensaje");
}