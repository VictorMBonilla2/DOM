import { ajax } from "./ajax.js";

export async function ObtenerUsuarios() {
    return ajax("users")
}