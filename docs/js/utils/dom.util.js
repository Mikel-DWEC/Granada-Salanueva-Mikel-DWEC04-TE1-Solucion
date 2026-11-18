'use strict'

export function crearElemento(tipo, clase = "", texto = "") {

    let elemento = document.createElement(tipo);
    
    if(clase !== "") {
        elemento.className = clase;
    }
    
    if(texto !== "") {
        elemento.textContent = texto;
    }

    return elemento;

}