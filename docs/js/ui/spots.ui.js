'use strict'

import { KPIS } from "../data/spots.data.js";

export function crearSpots(playas) {

    let seccionSpot = document.querySelector("#spots-grid");

    for(let i = 0; i < playas.length; i++) {
        //========================
        // --- TARJETA SPOT ---
        //========================

        let tarjetaSpot = crearElemento("article", "spot-card");

            let cabeceraSpot = crearElemento("div", "spot-card-header");

                // 1. Nombre de la playa
                let nombrePlaya = crearElemento("h2", "", playas[i].spot.nombre);

                // 2. Nivel de la playa
                let claseNivel = "badge ";
                switch(playas[i].spot.nivel) {
                    case "Todos los niveles":   claseNivel += "badge-all";      break;
                    case "Intermedio":          claseNivel += "badge-inter";    break;
                    case "Avanzado":            claseNivel += "badge-advanced"; break;
                    case "Experto":             claseNivel += "badge-expert";   break;
                }
                let nivelPlaya = crearElemento("span", claseNivel, playas[i].spot.nivel);

            // 3. Añadir la playa y el nivel a la cabecera del spot
            cabeceraSpot.append(nombrePlaya, nivelPlaya);

            //========================
            // --- PROVINCIA SPOT ---
            //========================

            let provincia = crearElemento("p", "spot-province", playas[i].spot.provincia);

            //=========================
            // --- CONTENEDOR KPIs ---
            //=========================

            let contenedorKpis = crearElemento("div", "spot-kpis");

            //========================
            // --- ELEMENTOS KPIs ---
            //========================

            const valoresKpis = [playas[i].ola, playas[i].periodo, playas[i].viento];
            for(let iKpi = 0; iKpi < KPIS.length; iKpi++) {
                // 1. crear el contenedor del kpi
                let contenedorKpi = crearElemento("div", "kpi");

                // 2. crear la etiqueta del kpi
                let etiquetaKpi = crearElemento("span", "kpi-label", KPIS[iKpi].etiqueta);

                // 3. crear el valor del kpi
                let valorKpi = crearElemento("span", "kpi-value", valoresKpis[iKpi]);

                // 4. Añadir la etiqueta y el valor al contendor kpi
                contenedorKpi.append(etiquetaKpi, valorKpi);

                // 5. Añadir el contendor kpi al contendor de los tres kpis.
                contenedorKpis.append(contenedorKpi);
            };

            //========================
            // --- BOTON DETALLES ---
            //========================

            let btnDetalles = crearElemento("button", "btn-detail", "Ver detalles");

            btnDetalles.addEventListener("click", () => {
                windows.location.href = ""
            });

        // Añadir cabecera, provincia, KPIs y botón detalle a la tarjeta spot
        tarjetaSpot.append(cabeceraSpot, provincia, contenedorKpis, btnDetalles);
        
        // Añadir la tarjeta a la parrilla de spots
        seccionSpot.append(tarjetaSpot);
    }

}

function crearElemento(tipo, clase = "", texto = "") {

    let elemento = document.createElement(tipo);
    
    if(clase !== "") {
        elemento.className = clase;
    }
    
    if(texto !== "") {
        elemento.textContent = texto;
    }

    return elemento;

}