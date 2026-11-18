'use strict'

import { SPOTS_BD } from "../data/spots.data.js";
import { CONFIG_KPIS } from "../data/kpis.data.js"; 
import { ParteMarino } from "../models/parte-marino.model.js";

const URL_BASE = "https://marine-api.open-meteo.com/v1/marine?";


function consultarAPI(uri) {

    return fetch(uri)
        .then(respuesta => {
            if (!respuesta.ok) throw new Error("Error al consultar los datos en el servidor");
            return respuesta.json();
        })

}

export function obtenerParteResumen() {

    //let url = "https://marine-api.open-meteo.com/v1/marine?";
    //let url = "https://marin-api.open-meteo.com/v1/marine?";
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
    for(let i = 0; i < CONFIG_KPIS.length; i++) {
        parametros += CONFIG_KPIS[i].parametro;
        if(i < CONFIG_KPIS.length - 1) {
            parametros += ",";
        }
    }

    let playas = latitudes + "&" + longitudes;
    let uri = URL_BASE + playas + "&" + parametros;

    return consultarAPI(uri)
        .then(datosApi => {
            return SPOTS_BD.map((spot, i) => new ParteMarino(spot, datosApi[i]));
        });
    
}

export function obtenerDetalleSpot(spot) {

    let url = "https://marine-api.open-meteo.com/v1/marine?";
    let latitud = "latitude=" + spot.latitud;
    let longitud = "longitude=" + spot.longitud;
    let playa = latitud + "&" + longitud;
    let parametros = "hourly=wave_height,wave_direction,wind_wave_direction&forecast_days=7";

    let uri = url + playa + "&" + parametros;

    return consultarAPI(uri);

}

export function buscarSpot(idSpot) {
    
    return SPOTS_BD.find(spot => spot.id === idSpot);

    
}

export function filtrarPrevisionPorHoras(prevision, horas) {

    return {
        "time": prevision.time.slice(0, horas),
        "wave_height": prevision.wave_height.slice(0, horas)
    }
}