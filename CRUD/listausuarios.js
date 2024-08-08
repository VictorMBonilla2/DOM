// export async function listaUsuarios(){
// const tabla = document.querySelector(".content_list")
// tabla.innerHTML="";
// const responseDocument = await fetch("http://localhost:3000/users");
// const result1 = await responseDocument.json();
// const cantproperty = Object.keys(result1[0])

    
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
    const fragmento = document.createDocumentFragment();

const responseDocument = await fetch("http://localhost:3000/users");

const result1 = await responseDocument.json();

const cantproperty = Object.keys(result1[0])


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
        let value = element[key];
            lista.textContent = value;
            lista.classList.add(key)
            contenido.appendChild(lista); 
    });
    hola.appendChild(contenido);
});

fragmento.appendChild(hola)


contenidoTabla.appendChild(fragmento)

}
