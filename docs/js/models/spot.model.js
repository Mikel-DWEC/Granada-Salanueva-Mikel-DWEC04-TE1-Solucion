'use strict'

export class Spot {

    constructor(elemento) {
        this.id = elemento.id;
        this.nombre = elemento.nombre;
        this.provincia = elemento.provincia;
        this.nivel = elemento.nivel;
        this.descripcion = elemento.descripcion;
        this.longitud = elemento.longitud;
        this.latitud = elemento.latitud;
        this.orientacionMar = elemento.orientacionMar;
    }

}

export class ParteMarino {

    constructor(spot, datosAPI) {
        this.spot = spot;
        this.ola = datosAPI.current.wave_height + " " + datosAPI.current_units.wave_height;
        this.periodo = datosAPI.current.wave_period + " " + datosAPI.current_units.wave_period;
        this.viento = obtenerTipoViento(datosAPI.current.wind_wave_direction, spot.orientacionMar);

        // Para poder filtrar por altura ola fácilmente
        this.alturaOla = datosAPI.current.wave_height;
    }
}

function obtenerTipoViento(gradosViento, orientacionMar) {

    // Calculamos la diferencia absoluta entre 0 y 180 grados
    let diferencia = Math.abs(gradosViento - orientacionMar);
    if (diferencia > 180) {
        diferencia = 360 - diferencia;
    }

    if (diferencia >= 135) {
        return "Offshore";    // Viene de tierra (opuesto al mar)
    } else if (diferencia <= 45) {
        return "Onshore";     // Viene del mar (de frente)
    } else {
        return "Cross-shore"; // Viene lateral
    }

} 