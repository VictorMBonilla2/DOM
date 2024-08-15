

import { ObtenerDocumentos } from "./ObtenerDocumentos.js";
import { ObtenerUsuarios } from "./ObtenerUsuarios.js";




export async function listaUsuarios() {

    const tabla = document.querySelector("template").content;
    const contenidoTabla= document.querySelector(".content_list")
    contenidoTabla.innerHTML=""; //Vaciar contenido para refrescar.
    const fragmento = document.createDocumentFragment();


const result1 =  await ObtenerUsuarios();

const cantproperty = Object.keys(result1[0]).slice(2);

console.log(cantproperty);

const listaDocumentos= await ObtenerDocumentos();
console.log(listaDocumentos);


const clone = tabla.cloneNode(true);
let th = clone.querySelectorAll("th");
let contador = 0;
const header_encabezado = clone.querySelector("thead");
cantproperty.forEach(elemento => {
    const lista = th[contador]
    lista.textContent= elemento;
    header_encabezado.appendChild(lista);
    contador++;
});
fragmento.appendChild(header_encabezado);

const hola = document.createElement("tbody")
result1.forEach(element => {
    const contenido = document.createElement("tr");
    contenido.setAttribute("id", element.id)
    cantproperty.forEach(key => {
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


});

fragmento.appendChild(hola)


contenidoTabla.appendChild(fragmento)

}
