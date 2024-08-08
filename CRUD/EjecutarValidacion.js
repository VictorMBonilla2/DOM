import { listaUsuarios } from "./listausuarios.js";
import { vaciarInputs } from "./RemoverInput.js";
import { validarFormulario } from "./validarFormulario.js";

export async function EjecutarValidacion(link,data, e,lista) {
    const result = await validarFormulario(e,lista);
    console.log(result);
    if (result){
        vaciarInputs(lista);
        try {
            const response = await fetch(link, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            console.log(result);

        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);

        }

        listaUsuarios();
    }
}