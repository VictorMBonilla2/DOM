import { ajax } from "./ajax.js";

export async function ObtenerDocumentos() {
    return ajax("documento")
}