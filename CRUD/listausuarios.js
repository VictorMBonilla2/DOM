// export async function listaUsuarios(){
// const tabla = document.querySelector(".content_list")
// tabla.innerHTML="";
// const responseDocument = await fetch("http://localhost:3000/users");
// const result1 = await responseDocument.json();
// const cantproperty = Object.keys(result1[0])

import { ObtenerDocumentos } from "./ObtenerDocumentos.js";

    
// const header_encabezado = document.createElement("div")
// header_encabezado.classList.add("list_header")
// const fila_header = document.createElement("div");
// fila_header.classList.add("fila")
// cantproperty.forEach(elemento => {
//     const lista = document.createElement("div")
//     lista.textContent = elemento
//     fila_header.appendChild(lista);
// });
// header_encabezado.appendChild(fila_header)
// tabla.appendChild(header_encabezado);

// const body = document.createElement("div")

// result1.forEach(element => {
//     const contenido = document.createElement("div");
//     contenido.classList.add("fila")
//     cantproperty.forEach(key => {
//         const lista = document.createElement("div");
//         let value = element[key];
//         lista.textContent = value;
//         contenido.appendChild(lista);
//     });
//     body.appendChild(contenido);
// });

// tabla.appendChild(body)
// }


export async function listaUsuarios() {

    const tabla = document.querySelector("template").content;
    const contenidoTabla= document.querySelector(".content_list")
    contenidoTabla.innerHTML=""; //Vaciar contenido para refrescar.
    const fragmento = document.createDocumentFragment();

const responseDocument = await fetch("http://localhost:3000/users");

const result1 = await responseDocument.json();

const cantproperty = Object.keys(result1[0])

const listaDocumentos= await ObtenerDocumentos();
console.log(listaDocumentos);


const clone = tabla.cloneNode(true);
let th = clone.querySelectorAll("th");
let contador = 0;
const header_encabezado = clone.querySelector("thead");
cantproperty.forEach(elemento => {
    const lista = th[contador]
    lista.textContent = elemento
    header_encabezado.appendChild(lista);
    contador++;
});
fragmento.appendChild(header_encabezado);

const hola = document.createElement("tbody")
result1.forEach(element => {
    const contenido = document.createElement("tr");
    cantproperty.forEach(key => {
        const lista = document.createElement("td");
        if(key ==="tipoDocumento"){
            console.log("hola");           
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
