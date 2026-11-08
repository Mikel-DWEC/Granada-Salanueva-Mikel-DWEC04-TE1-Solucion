'use-strict'

export class Spot {

    constructor(elemento) {
        this.id = elemento.id;
        this.nombre = elemento.nombre;
        this.provincia = elemento.provincia;
        this.nivel = elemento.nivel;
        this.descripcion = elemento.descripcion;
        this.longitud = elemento.longitud;
        this.latitud = elemento.latitud;
    }

}