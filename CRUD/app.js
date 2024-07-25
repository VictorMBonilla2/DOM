import Validarcorreo from "./module.js"

import { verificarInput } from "./verificarInput.js";

import { validarFormulario } from "./validarFormulario.js";

import { Escucharteclado } from "./EscucharTeclado.js";



const $formulario = document.querySelector("form")
const $required = document.querySelectorAll("form[novalidate] > *[required]")
console.log($required);
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
console.log($formulario);



/*/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/*/ 



document.addEventListener("DOMContentLoaded", function() {
    const terms = document.querySelector("#terms");
    const boton = document.querySelector("#boton");
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
    validarFormulario(e,lista,$formulario)
    Escucharteclado($formulario,lista)
} )
 
verificarInput(lista)