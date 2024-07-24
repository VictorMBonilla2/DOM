import Validarcorreo from "./module.js"
import { Valdartexto, Validaralfanumerico } from './validarTexto.js';




const $formulario = document.querySelector("form")
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


function numero(input){
    let re = /^[0-9]+$/.test(input)
    console.log(`El campo ${input} cumple con el filtro? : ${re}`);
    return re;
}
/*/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/*/ 
function email(input){
    let re = /^[a-zA-Z._]*@{0,19}/i.test(input)
    console.log(`El campo ${input} cumple con el filtro? : ${re}`);
    return re;
}


function Escucharteclado (linea,lista){
    linea.addEventListener("keyup", (event) => {
        console.log(event);
        lista.forEach(element => {

            if (element.value.trim() != "" ){
                if(!element.classList.contains("checkedInput")){
                    console.log(`El campo ${element.name} se ha llenado`);
                    element.classList.remove("errorInput")
                    element.classList.add("correctInput")
                    console.log(element.classList.contains("checkedInput"));
                }
            }else{
                element.classList.add("errorInput")
                element.classList.remove("correctInput")
                element.classList.remove("checkedInput")
            }
        });
    });

}

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

$formulario.addEventListener("submit", function (event){
    event.preventDefault() 
    lista.forEach(element => {
        if (element.value.trim() === ""){
            console.log(`El campo ${element.name} esta vacio`);
            element.classList.add("errorInput")
            element.focus();
        } else if(element === nombre || element === appelido){
            if (element.value.length > 8) {
                console.log(`El campo ${element.name} tiene mucho texto!`);
                element.classList.add("errorInput");
                element.classList.remove("correctInput")
                element.classList.remove("checkedInput")
            }else{
                element.classList.add("checkedInput")
            }
        } else if (element === telefono ){
            if (element.value.length > 10) {
                console.log(`El campo ${element.name} tiene mucho texto!`);
                element.classList.add("errorInput");
                element.classList.remove("correctInput")
                element.classList.remove("checkedInput")
            }else{
                element.classList.add("checkedInput")
            }
            
        }else if (element === direccion ){
            if (element.value.length > 64) {
                console.log(`El campo ${element.name} tiene mucho texto!`);
                element.classList.add("errorInput");
                element.classList.remove("correctInput")
                element.classList.remove("checkedInput")
            }else{
                element.classList.add("checkedInput")
            }
            
        }else if (element === correo ){

            /*/^[a-z0-9-._]+@[a-z0-9-._]+\.[a-z]{2,3}\.[a-z]{2}/*/
            if (Validarcorreo(element.value)) {
                console.log(`El campo ${element.name} tiene mucho texto!`);
                element.classList.add("errorInput");
                element.classList.remove("correctInput")
                element.classList.remove("checkedInput")
            }else{
                element.classList.add("checkedInput")
            }
            
        }
        else if (element === numerodocumento ){
            if (element.value.length > 64) {
                console.log(`El campo ${element.name} tiene mucho texto!`);
                element.classList.add("errorInput");
                element.classList.remove("correctInput")
                element.classList.remove("checkedInput")
            }else{
                element.classList.add("checkedInput")
            }
            
        }
        else{
            element.classList.add("checkedInput")
        }
    });
    console.log(terms.value);
    Escucharteclado($formulario,lista)
    lista.forEach(element => {
        element.addEventListener("blur", (event) => {
            if(element.value.trim() != ""){
                element.classList.remove("correctInput")
                element.classList.add("checkedInput")
            }

            });
    });

})


function verificarInput(lista){
    lista.forEach(element => {
        element.addEventListener("keypress", (event) =>{
            if(element===nombre){
                console.log(event.key);
                if(Valdartexto(event.key)){
                    console.log("Caracter ingresado");
                }else{
                    event.preventDefault()
                    console.log("Caracter no valido."); 
                }
                
            }else if (element===appelido){
                if(Valdartexto(event.key)){
                    console.log("Caracter ingresado");
                }else{
                    event.preventDefault()
                    console.log("Caracter no valido."); 
                }
            }else if (element===telefono) {
                if(numero(event.key)){
                    console.log("Caracter ingresado");
                }else{
                    event.preventDefault()
                    console.log("Caracter no valido."); 
                }
                
            }else if (element===correo) {
                if(email(event.key)){
                    console.log("Caracter ingresado");
                }else{
                    event.preventDefault()
                    console.log("Caracter no valido."); 
                }
                
            }
            else if (element===direccion) {
                if(Validaralfanumerico(event.key)){
                    console.log("Caracter ingresado");
                }else{
                    event.preventDefault()
                    console.log("Caracter no valido."); 
                }
            }else if (element===numerodocumento) {
                if(numero(event.key)){
                    console.log("Caracter ingresado");
                }else{
                    event.preventDefault()
                    console.log("Caracter no valido."); 
                }
            }
        })
    });
}



  
verificarInput(lista)