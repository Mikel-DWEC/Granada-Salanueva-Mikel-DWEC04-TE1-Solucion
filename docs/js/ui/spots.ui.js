'use strict'

import { CONFIG_KPIS } from "../data/kpis.data.js";
import { crearElemento } from "../utils/dom.util.js";

export function mostrarSpots(partesMarinos) {

    let seccionSpot = document.querySelector("#spots-grid");
    seccionSpot.innerHTML = "";

    for(let i = 0; i < partesMarinos.length; i++) {
        //========================
        // --- TARJETA SPOT ---
        //========================

        let tarjetaSpot = crearElemento("article", "spot-card");

            let cabeceraSpot = crearElemento("div", "spot-card-header");

                // 1. Nombre de la playa
                let nombreSpot = crearElemento("h2", "", partesMarinos[i].spot.nombre);

                // 2. Nivel de la playa
                let claseNivel = "badge ";
                switch(partesMarinos[i].spot.nivel) {
                    case "Todos los niveles":   claseNivel += "badge-all";      break;
                    case "Intermedio":          claseNivel += "badge-inter";    break;
                    case "Avanzado":            claseNivel += "badge-advanced"; break;
                    case "Experto":             claseNivel += "badge-expert";   break;
                }
                let nivelSpot = crearElemento("span", claseNivel, partesMarinos[i].spot.nivel);

            // 3. Añadir la playa y el nivel a la cabecera del spot
            cabeceraSpot.append(nombreSpot, nivelSpot);

            //========================
            // --- PROVINCIA SPOT ---
            //========================

            let provincia = crearElemento("p", "spot-province", partesMarinos[i].spot.provincia);

            //=========================
            // --- CONTENEDOR KPIs ---
            //=========================

            let contenedorKpis = crearElemento("div", "spot-kpis");

            //========================
            // --- ELEMENTOS KPIs ---
            //========================

            const valoresKpis = [partesMarinos[i].ola, partesMarinos[i].periodo, partesMarinos[i].viento];
            for(let iKpi = 0; iKpi < CONFIG_KPIS.length; iKpi++) {
                // 1. crear el contenedor del kpi
                let contenedorKpi = crearElemento("div", "kpi");

                // 2. crear la etiqueta del kpi
                let etiquetaKpi = crearElemento("span", "kpi-label", CONFIG_KPIS[iKpi].etiqueta);

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
                sessionStorage.setItem("idSpot", partesMarinos[i].spot.id);
                window.location.href = "./pages/detalle.html";
            });

        // Añadir cabecera, provincia, KPIs y botón detalle a la tarjeta spot
        tarjetaSpot.append(cabeceraSpot, provincia, contenedorKpis, btnDetalles);
        
        // Añadir la tarjeta a la parrilla de spots
        seccionSpot.append(tarjetaSpot);
    }

}

export function mostrarMensajeError() {

    let seccionSpot = document.querySelector("#spots-grid");
    seccionSpot.innerHTML = "";

    let contenedorError = crearElemento("div", "error-card");
    let tituloError = crearElemento("h3", "", "⚠️ Error de conexión");
    let descripcion = crearElemento("p", "", "Comprueba tu conexión a internet o inténtalo de nuevo en unos minutos.")
    let btnReintentar = crearElemento("button", "btn-detail", "Reintentar");

    btnReintentar.addEventListener(('click'), () => {
        window.location.reload();
    })
    contenedorError.append(tituloError, descripcion, btnReintentar);


    seccionSpot.append(contenedorError);
}

export function mostrarSpinner() {
    let seccionSpot = document.querySelector("#spots-grid");
    seccionSpot.innerHTML = "";

    // Crear contenedor Spinner
    let contenedorSpinner = crearElemento("div", "spinner-container");
    let divSpinner = crearElemento("div", "spinner");
    let partesMarinos = crearElemento("p", "", "Cargando datos...");

    divSpinner.append(partesMarinos);
    contenedorSpinner.append(divSpinner);

    seccionSpot.append(contenedorSpinner);
}