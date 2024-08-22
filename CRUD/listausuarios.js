

import { ObtenerDocumentos } from "./ObtenerDocumentos.js";
import { ObtenerUsuarios } from "./ObtenerUsuarios.js";




export async function listaUsuarios(paginaActual) {
    console.log("pagina actual: "+paginaActual);
    const fragmento = document.createDocumentFragment();
    const resultado = await ObtenerUsuarios(paginaActual);
    const listaDocumentos= await ObtenerDocumentos();

    const encabezado = document.querySelector("template").content;
    const contenidoTabla= document.querySelector(".content_list>table")
    contenidoTabla.innerHTML="";
    const result1 =  resultado.data;
    const cantproperty = Object.keys(result1[0]).slice(0, -1);
    console.log(resultado);
    
    const nav = document.querySelector(".navigation")
    const first = resultado.first;
    const prev = resultado.prev;
    const next = resultado.next;
    const last = resultado.last;

    nav.querySelector(".first").disabled = prev ? false :true 
    nav.querySelector(".prev").disabled = prev ? false :true 
    nav.querySelector(".next").disabled = next ? false :true 
    nav.querySelector(".last").disabled = next ? false :true 

    nav.querySelector(".first").setAttribute("data-first", first)
    nav.querySelector(".prev").setAttribute("data-prev", prev)
    nav.querySelector(".next").setAttribute("data-next", next)
    nav.querySelector(".last").setAttribute("data-last", last)

const clone = encabezado.cloneNode(true);
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



const cuerpo = document.createElement("tbody")
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
    cuerpo.appendChild(contenido);


});

fragmento.appendChild(cuerpo)


contenidoTabla.appendChild(fragmento)

}
