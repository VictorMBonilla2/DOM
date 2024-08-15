import { ajax } from "./ajax.js";

export async function obtenerTipoDocumento(){
    return ajax("documento")
}