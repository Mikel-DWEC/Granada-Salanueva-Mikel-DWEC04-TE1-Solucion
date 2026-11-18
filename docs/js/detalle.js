'use strict'

import { obtenerDetalleSpot, buscarSpot, filtrarPrevisionPorHoras } from "./service/open-meteo.service.js";
import { pintarInfoSpot, dibujarGrafico, mostrarErrorGrafico, mostrarSpinnerDetalle } from "./ui/detalle.ui.js";

$(document).ready(function() {

    let idSpot = sessionStorage.getItem("idSpot");

    // 1. Comprobamos primero que exista el ID antes de hacer nada
    if (!idSpot) {
        window.location.href = "../index.html";
        return;
    }

    // 2. Buscamos el spot y comprobamos que sea válido
    const spotActual = buscarSpot(idSpot);
    if (!spotActual) {
        window.location.href = "../index.html";
        return;
    }

    // 3. Pintamos la cabecera y descripción
    pintarInfoSpot(spotActual);

    // 4. Pedimos los datos a la API del spot actual y dibujamos el gráfico
    let datosHorariosCompleto = null;
    mostrarSpinnerDetalle();
    obtenerDetalleSpot(spotActual) 
        .then(datosApi => {
            if (datosApi && datosApi.hourly) {
                datosHorariosCompleto = datosApi.hourly;
                dibujarGrafico(filtrarPrevisionPorHoras(datosHorariosCompleto, 24));
            }
        })
        .catch(error => {
            console.log(error);
            mostrarErrorGrafico();
        })

    let btnVolver = document.querySelector("#btn-volver");
    btnVolver.addEventListener('click', () => {
        window.location.href = "../index.html";
    })

    let btn24Horas = document.querySelector('[data-dias="1"]');
    btn24Horas.addEventListener('click',() => {
        if(!datosHorariosCompleto) {
            return;
        }

        dibujarGrafico(filtrarPrevisionPorHoras(datosHorariosCompleto, 24));
        btn24Horas.classList.add("active");
        btn72Horas.classList.remove("active");
    })

    let btn72Horas = document.querySelector('[data-dias="3"]');
    btn72Horas.addEventListener('click',() => {
        if(!datosHorariosCompleto) {
            return;
        }
        dibujarGrafico(filtrarPrevisionPorHoras(datosHorariosCompleto, 72));
        btn72Horas.classList.add("active");
        btn24Horas.classList.remove("active");
    })
});

