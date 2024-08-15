import { listaUsuarios } from "./listausuarios.js";
import { vaciarInputs } from "./RemoverInput.js";
import { validarFormulario } from "./validarFormulario.js";

export async function EjecutarValidacion(link,data, e,lista, modificar) {
    const result = await validarFormulario(e,lista);
    console.log(result);
    if (result){
        vaciarInputs(lista);
        try {
            
            if (modificar){
                const response = await fetch(link, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                console.log(result);


            } else{
                const response = await fetch(link, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                console.log(result);


                const hola = document.querySelector("tbody")
                const contenido = document.createElement("tr");
                data.forEach(key => {
                    const lista = document.createElement("td");
                    if(key ==="tipoDocumento"){  
                        const nombre = (listaDocumentos.find(({ id }) => id === element[key])).tipodocumento;
                        let value = nombre;
                        lista.textContent = value;
                        lista.classList.add(key)
                        contenido.appendChild(lista);                          
                    }else{
                        let value = element[key];
                        lista.textContent = value;
                        lista.classList.add(key)
                        contenido.appendChild(lista); 
                    }
                });
                const editbutton = document.createElement("button");
                editbutton.classList.add("button", "modificar")
                editbutton.setAttribute("id-modificar",element.id)
                editbutton.textContent="Editar"
                const deletebutton = document.createElement("button");
                deletebutton.classList.add("button", "eliminar")
                deletebutton.setAttribute("id-eliminar",element.id)
                deletebutton.textContent="Eliminar"
                contenido.appendChild(editbutton)
                contenido.appendChild(deletebutton)
                hola.appendChild(contenido);
            }
            
            

        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);

        }

        listaUsuarios();
    }
}