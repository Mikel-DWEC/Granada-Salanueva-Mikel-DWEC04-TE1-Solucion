'use strict'
import { crearElemento } from "../utils/dom.util.js";

export function pintarInfoSpot(spot) {
    document.querySelector("#detalle-nombre").textContent = spot.nombre;
    document.querySelector("#detalle-provincia").textContent = spot.provincia;
    document.querySelector("#detalle-descripcion").textContent = spot.descripcion;

    const badgeNivel = document.querySelector("#detalle-nivel");
    badgeNivel.textContent = spot.nivel;
    badgeNivel.className = "badge "; // Reseteamos clases previas

    switch (spot.nivel) {
        case "Todos los niveles":   badgeNivel.className += "badge-all";      break;
        case "Intermedio":          badgeNivel.className += "badge-inter";    break;
        case "Avanzado":            badgeNivel.className += "badge-advanced"; break;
        case "Experto":             badgeNivel.className += "badge-expert";   break;
    }
}

export function dibujarGrafico(datosHourly) {
    
    // 1. Creamos un canvas dentro del contenedor
    let contenedorCanvas = document.querySelector(".contenedor-canvas");
    contenedorCanvas.innerHTML = "";

    let lienzo = crearElemento("canvas");
    lienzo.id = "mi-grafico";
    contenedorCanvas.append(lienzo);

    // 2. Limpiamos las fechas ("2026-11-17T14:00" -> "17/11 14:00") para que quepan bien
    const horasLimpias = datosHourly.time.map(fecha => {
        const partes = fecha.split("T");       // ["2026-11-17", "14:00"]
        const diaMes = partes[0].slice(5);     // "11-17"
        return `${diaMes} ${partes[1]}`;       // "11-17 14:00"
    });

    // 3. Creamos el gráfico conectando los arrays
    new Chart(lienzo, {
        type: 'line', // Tipo de gráfico: líneas
        data: {
            labels: horasLimpias, // <-- AQUÍ ENLAZAS EL EJE X (TIEMPO)
            datasets: [
                {
                    label: 'Altura de ola (m)',
                    data: datosHourly.wave_height, // <-- AQUÍ ENLAZAS LOS DATOS DE OLAS
                    borderColor: '#2c3e50',
                    backgroundColor: 'rgba(44, 62, 80, 0.2)',
                    borderWidth: 2,
                    tension: 0.3, // Suaviza las curvas de la línea
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Metros (m)'
                    }
                }
            }
        }
    });
}

export function mostrarErrorGrafico() {
    let contenedorGrafico = document.querySelector(".contenedor-canvas");
    contenedorGrafico.innerHTML = "";
    
    let contenedorError = crearElemento("div", "error-card");
    let tituloError = crearElemento("h3", "", "⚠️ Error de conexión");
    let descripcion = crearElemento("p", "", "Comprueba tu conexión a internet o inténtalo de nuevo en unos minutos.")
    let btnReintentar = crearElemento("button", "btn-detail", "Reintentar");

    btnReintentar.addEventListener(('click'), () => {
        window.location.reload();
    })
    contenedorError.append(tituloError, descripcion, btnReintentar);


    contenedorGrafico.append(contenedorError);
}

export function mostrarSpinnerDetalle() {

    let contenedorCanvas = document.querySelector(".contenedor-canvas");
    contenedorCanvas.innerHTML = "";

    // Crear contenedor Spinner
    let contenedorSpinner = crearElemento("div", "spinner-container");
    let divSpinner = crearElemento("div", "spinner");
    let partesMarinos = crearElemento("p", "", "Cargando datos...");

    divSpinner.append(partesMarinos);
    contenedorSpinner.append(divSpinner);

    contenedorCanvas.append(contenedorSpinner);

}