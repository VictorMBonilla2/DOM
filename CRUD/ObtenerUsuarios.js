import { ajax } from "./ajax.js";

export async function ObtenerUsuarios(paginaActual) {
    return ajax(`users?_page=${paginaActual}&_per_page=5`)
}