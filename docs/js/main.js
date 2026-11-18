'use strict'

import { obtenerParteResumen } from "./service/open-meteo.service.js";
import { mostrarSpots, mostrarMensajeError, mostrarSpinner } from "./ui/spots.ui.js";

$(document).ready(function(){
    mostrarSpinner();
    obtenerParteResumen()
        .then(partesMarinos => {
            if(partesMarinos) {
                mostrarSpots(partesMarinos);
            }
        })
        .catch(error => {
            console.log(error);
            mostrarMensajeError();
        })
});

