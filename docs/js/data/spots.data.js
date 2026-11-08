'use-strict'

import { Spot } from "../models/spot.model.js";

const spotsJson = `[
    {
        id: "la-zurriola",
        nombre: "La Zurriola (San Sebastián)",
        provincia: "Gipuzkoa",
        nivel: "Intermedio",
        descripcion: "Playa urbana muy activa con olas constantes durante todo el año.",
        latitud: 43.3275,
        longitud: -1.9744
    },
    {
        id: "zarautz",
        nombre: "Zarautz",
        provincia: "Gipuzkoa",
        nivel: "Todos los niveles",
        descripcion: "La playa más larga del País Vasco, ideal tanto para escuelas como para surfistas experimentados.",
        latitud: 43.2872,
        longitud: -2.1648
    },
    {
        id: "mundaka",
        nombre: "Mundaka",
        provincia: "Bizkaia",
        nivel: "Avanzado",
        descripcion: "Famosa mundialmente por su perfecta ola de izquierda que rompe sobre una barra de arena.",
        latitud: 43.4072,
        longitud: -2.6978
    },
    {
        id: "bakio",
        nombre: "Bakio",
        provincia: "Bizkaia",
        nivel: "Todos los niveles",
        descripcion: "Spot muy consistente que aguanta bien diferentes tamaños de ola y direcciones de viento.",
        latitud: 43.4292,
        longitud: -2.8028
    },
    {
        id: "sopela",
        nombre: "Sopela (Playa de Arrietara)",
        provincia: "Bizkaia",
        nivel: "Intermedio",
        descripcion: "Uno de los epicentros del surf vizcaíno, con varios picos de roca y arena.",
        latitud: 43.3914,
        longitud: -2.9961
    },
    {
        id: "meñakoz",
        nombre: "Meñakoz (Barrika)",
        provincia: "Bizkaia",
        nivel: "Experto",
        descripcion: "Un santuario de olas grandes. Solo para surfistas muy experimentados debido a su fondo de roca y fuerza.",
        latitud: 43.3986,
        longitud: -3.0078
    }
]`

const spots = JSON.parse(spotsJson);

export const SPOTS_DB = spots.map(elemento => {
    return new Spot(elemento);
});