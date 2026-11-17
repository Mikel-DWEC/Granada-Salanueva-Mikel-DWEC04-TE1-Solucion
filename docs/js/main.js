'use strict'

import { consultarAPI } from "../js/service/wavewatch.service.js";
import { crearSpots } from "./ui/spots.ui.js";

$(document).ready(function(){
    consultarAPI()
        .then(partesMarinos => {
            if(partesMarinos) {
                crearSpots(partesMarinos);
            }
        });
});

