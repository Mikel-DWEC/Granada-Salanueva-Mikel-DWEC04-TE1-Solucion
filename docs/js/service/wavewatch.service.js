'use strict'

import { SPOTS_BD } from "../data/spots.data.js";
import { KPIS } from "../data/spots.data.js"; 
import { ParteMarino } from "../models/spot.model.js";

//import { crearSpots } from "../ui/spots.ui.js";

function crearURI () {

    let url = "https://marine-api.open-meteo.com/v1/marine?";
    let latitudes = "latitude=";
    let longitudes = "longitude=";
    let parametros = "current=";

    // Añadimos las playas que hay que buscar a traves de las latitudes y longitudes
    for(let i = 0; i < SPOTS_BD.length; i++) {
        latitudes += SPOTS_BD[i].latitud;
        if(i < SPOTS_BD.length - 1) {
            latitudes += ",";
        }
        longitudes += SPOTS_BD[i].longitud;
        if(i < SPOTS_BD.length - 1) {
            longitudes += ",";
        }
    }

    // Añadimos los parametros que hay que buscar
    for(let i = 0; i < KPIS.length; i++) {
        parametros += KPIS[i].parametro;
        if(i < KPIS.length - 1) {
            parametros += ",";
        }
    }

    let playas = latitudes + "&" + longitudes;
    let uri = url + playas + "&" + parametros;

    return uri;

}

export function consultarAPI() {

    return fetch(crearURI())
        .then(respuesta => {
            if (!respuesta.ok) throw new Error("Error al consultar los datos en el servidor");
            return respuesta.json();
        })
        .then(datosApi => {
            // Unimos cada Spot de nuestra BD con su respuesta correspondiente de la API
            return SPOTS_BD.map((spot, i) => new ParteMarino(spot, datosApi[i]));

        })
        .catch(error => {
            console.error("No se pudieron cargar las playas:", error);
        })
}