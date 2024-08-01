const tabla = document.querySelector(".table_users")

const responseDocument = await fetch("http://localhost:3000/users");

const result1 = await responseDocument.json();

const cantproperty = Object.keys(result1[0])


const header_encabezado = document.createElement("tr")
const contenido = document.createElement("tr")


for (let index = 0; index < result1.length; index++) {
    let element = result1[index];

    console.log(element);
    for (let i = 0; i < element.length; i++) {
        console.log(element);

        const lista = document.createElement("td")
        lista.textContent = element[i]
        console.log(element);  
        contenido.appendChild(lista);
    }


}



cantproperty.forEach(elemento => {
    const lista = document.createElement("th")
    lista.textContent = elemento
    header_encabezado.appendChild(lista);
});
tabla.appendChild(header_encabezado);
