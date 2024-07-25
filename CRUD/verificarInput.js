import { Valdartexto, Validaralfanumerico } from './validarTexto.js';
import { email } from "./email.js";
import { numero } from "./numero.js";

export function verificarInput(lista){
    lista.forEach(element => {
        element.addEventListener("keypress", (event) =>{
            if(element.name==="Nombre"){
                console.log(event.key);
                if(Valdartexto(event.key)){
                    console.log("Caracter ingresado");
                }else{
                    event.preventDefault()
                    console.log("Caracter no valido."); 
                }
                
            }else if (element.name==="Apellido"){
                if(Valdartexto(event.key)){
                    console.log("Caracter ingresado");
                }else{
                    event.preventDefault()
                    console.log("Caracter no valido."); 
                }
            }else if (element.name==="Telefono") {
                if(numero(event.key)){
                    console.log("Caracter ingresado");
                }else{
                    event.preventDefault()
                    console.log("Caracter no valido."); 
                }
                
            }else if (element.name==="Correo") {
                if(email(event.key)){
                    console.log("Caracter ingresado");
                }else{
                    event.preventDefault()
                    console.log("Caracter no valido."); 
                }
                
            }
            else if (element.name==="Direccion") {
                if(Validaralfanumerico(event.key)){
                    console.log("Caracter ingresado");
                }else{
                    event.preventDefault()
                    console.log("Caracter no valido."); 
                }
            }else if (element.name==="documento") {
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
