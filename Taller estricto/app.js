import { usuarios } from "./modulo.js";
const $root = document.querySelector(".root");
const $div = document.createElement("div");
let text = "Este es un texto";
$div.textContent = text;
$div.classList.add("box");
$root.appendChild($div);


usuarios().then((usuarios) => {

  usuarios.forEach(usu => {
    const $div1 = document.createElement("div");
    $div1.classList.add("box");
    const $header = document.createElement("div");
    $header.classList.add("card__header");
    const $content = document.createElement("div");
    $content.classList.add("card__content");
    let titulo = `Usuario  ${usu.id}`;
    $header.textContent = titulo;
    let nombre = `Nombre: ${usu.name}`;
    let usuario = `Usuario: ${usu.username}`;
    let correo = `Correo: ${usu.email}`;
    let phone = `Telefono: ${usu.phone}`;
  //     $content.innerHTML = `
  //   <p>${nombre}</p>
  //   <p>${usuario}</p>
  //   <p>${correo}</p>
  //   <p>${phone}</p>
  // `;
    let user_list = [nombre, usuario, correo, phone]
    const $fragmento = document.createDocumentFragment();
    const $template = document.querySelector("#template").content;

    user_list.forEach((dato) => {
      // let $li = document.createElement("p")
      // $li.textContent = dato
      // $fragmento.appendChild($li)
      $template.querySelector("h2").textContent = dato.nombre;
      $template.querySelector("p").textContent = dato.usuario;
      $template.querySelector("p ~ p").textContent = "hola";
      let clone = document.importNode($template, true)
      $fragmento.appendChild(clone);
    })  
    $div1.appendChild($header);
    $content.appendChild($fragmento);
    $div1.appendChild($content);
    $root.appendChild($div1) 
  });




  
}
)