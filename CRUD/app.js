import { verificarInput } from "./verificarInput.js";

import { validarFormulario } from "./validarFormulario.js";

import { Escucharteclado } from "./EscucharTeclado.js";

import { EjecutarValidacion } from "./EjecutarValidacion.js";

import { obtenerTipoDocumento } from "./obtenerTipoDocumento.js";



const $formulario = document.querySelector("form")
const $required = document.querySelectorAll("form[novalidate] > *[required]")
const nombre = document.querySelector("#name")
const appelido = document.querySelector("#lastname")
const telefono = document.querySelector("#telephone")
const direccion = document.querySelector("#direccion")
const correo = document.querySelector("#email")
const tipodocumento = document.querySelector("#documentType")
const numerodocumento =document.querySelector("#documento")
const terms = document.querySelector("#terms")
const boton = document.querySelector("#boton")

const lista = [nombre,appelido, telefono,direccion,correo,tipodocumento,numerodocumento]

/*/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/*/ 

document.addEventListener("DOMContentLoaded", function() {
    boton.setAttribute("disabled", "disabled")
    terms.addEventListener("change", function() {
        
        if (terms.checked) {
            boton.removeAttribute("disabled");
            
        } else {
            boton.setAttribute("disabled", "disabled");
        }
    });
    tipodocumento.addEventListener("change",function(event){
        console.log(event);
        if(tipodocumento.value != "Seleccione"){
            tipodocumento.classList.remove("errorInput")
        }
    })
    
});

$formulario.addEventListener("submit",(e) =>{
    e.preventDefault() 
    Escucharteclado($formulario,lista)
    let data = {
        nombre: nombre.value,
        appelido: appelido.value,
        telefono: telefono.value,
        direccion: direccion.value,
        correo: correo.value,                       
        tipoDocumento: tipodocumento.value,
        numerodocumento: numerodocumento.value,
    }
    EjecutarValidacion("http://localhost:3000/users",data , e, lista)
})

const listatipodocumento= await obtenerTipoDocumento();


listatipodocumento.forEach(elemento => {
    const documentipo = document.createElement("option")
    documentipo.setAttribute("value", elemento.tipodocumento);
    documentipo.text = elemento.tipodocumento
    tipodocumento.appendChild(documentipo);
});


 
verificarInput(lista)