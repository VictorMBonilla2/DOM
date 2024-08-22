import { verificarInput } from "./verificarInput.js";

import { validarFormulario } from "./validarFormulario.js";

import { Escucharteclado } from "./EscucharTeclado.js";

import { EjecutarValidacion } from "./EjecutarValidacion.js";

import { obtenerTipoDocumento } from "./obtenerTipoDocumento.js";
import { LlenarSelectDocumento } from "./selectDocument.js";
import { email } from "./email.js";
import { listaUsuarios } from "./listausuarios.js";
import { ObtenerUsuarios } from "./ObtenerUsuarios.js";
import { enviar } from "./ajax.js";
import { URL } from "./config.js";

//Formulario
const $formulario = document.querySelector("form")
const $required = document.querySelectorAll("form[novalidate] > *[required]")
const id_usuario = document.querySelector("#id_user")
const nombre = document.querySelector("#name")
const appelido = document.querySelector("#lastname")
const telefono = document.querySelector("#telephone")
const direccion = document.querySelector("#direccion")
const correo = document.querySelector("#email")
const tipodocumento = document.querySelector("#documentType")
const numerodocumento =document.querySelector("#documento")
const terms = document.querySelector("#terms")
const boton = document.querySelector("#boton")
const mostrarLista= document.querySelector(".content_list")
const paginador= document.querySelector(".navigation")

//Lista
const primero = paginador.querySelector(".first")
const anterior = paginador.querySelector(".prev")
const siguiente = paginador.querySelector(".next")
const ultimo = paginador.querySelector(".last")

//Template





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
    listaUsuarios(1);
});

document.addEventListener("click", async (event)=>{
   
    if(event.target===primero){
        console.log("presiono Ultimo");     
        listaUsuarios(primero.dataset.first)
    }
    if(event.target===anterior){
        console.log("presiono anterior");
        
        listaUsuarios(anterior.dataset.prev)
    }
    if(event.target===siguiente){
        console.log("presiono siguiente");
        console.log(siguiente.dataset.next);
        listaUsuarios(siguiente.dataset.next)
    }
    if(event.target===ultimo){
        console.log("presiono siguiente");
        console.log(ultimo.dataset.last);
        listaUsuarios(ultimo.dataset.last)
    }
    
    if(event.target.matches(".modificar")){
        let evento= event.target;
        let id= evento.getAttribute("id-modificar")
 
        let data= await enviar(`users/${id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        console.log(data);

        const { id: Id_de_usuario, nombre: Nombre, appelido: Apellido, telefono: Telefono, direccion: Direccion, correo: Correo_Electronico, tipoDocumento: Tipo_de_Documento, numerodocumento: Numero_de_documento} = data;
        $formulario.setAttribute("id_usuario", Id_de_usuario)
        nombre.value= Nombre;
        appelido.value = Apellido
        telefono.value = Telefono
        direccion.value = Direccion
        correo.value = Correo_Electronico
        tipodocumento.value = Tipo_de_Documento
        numerodocumento.value=Numero_de_documento
        boton.classList.add("update")
        console.log(Id_de_usuario);
        console.log($formulario.attributes.getNamedItem("id_usuario"));
        
    }
    if(event.target.matches(".eliminar")){
        console.log("Has presionado "+  event.target.classList[1]);
        let evento= event.target
        let id= evento.getAttribute("id-eliminar");
       
        let nombre = document.getElementById(id);
        let nombre2 = nombre.querySelector(".nombre")        
        if(confirm("Estas seguro de eliminar al usuario "+ nombre2.te)){

            let data= await enviar(`users/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            console.log(data);
            
            document.getElementById(id).remove();
            
        }

    }


    if(event.target.matches(".lista_button")){
        console.log("hola");
        mostrarLista.style.top="0px"
    }

})


$formulario.addEventListener("submit",(e) =>{
    e.preventDefault() 
    Escucharteclado($formulario,lista)

    let id_user= $formulario.attributes.getNamedItem("id_usuario");

    
    let data = {
        nombre: nombre.value,
        appelido: appelido.value,
        telefono: telefono.value,
        direccion: direccion.value,
        correo: correo.value,                       
        tipoDocumento: tipodocumento.value,
        numerodocumento: numerodocumento.value,
    }

    
    if(boton.classList.contains("update") && id_user !== null){
        console.log("Inicia proceso de editar usuario.");
        console.log(data);
       
        EjecutarValidacion(`${URL}/users/${id_user.value}`,data , e, lista, true)
    }else {
        console.log("Se inica proceso de envio");
        
        EjecutarValidacion(`${URL}/users`,data , e, lista, false)
    }


    
})

const listatipodocumento= await obtenerTipoDocumento();

tipodocumento.appendChild(LlenarSelectDocumento(listatipodocumento))
 
verificarInput(lista)