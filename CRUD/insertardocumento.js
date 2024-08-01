import { EjecutarValidacion } from "./EjecutarValidacion.js"
import { Escucharteclado } from "./EscucharTeclado.js"
import { verificarInput } from "./verificarInput.js"
import { obtenerTipoDocumento } from "./obtenerTipoDocumento.js"

const $formulario = document.querySelector("form")
const tipoDocumento = document.querySelector("#documentotipo")
const listatipodocumento= await obtenerTipoDocumento();
const indexnum= listatipodocumento.length+1

const lista = [tipoDocumento]

$formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    Escucharteclado($formulario,lista)
    let data={
        id:indexnum,
        tipodocumento: tipoDocumento.value
    }
    EjecutarValidacion("http://localhost:3000/documento",data,evento,lista)
})

verificarInput(lista)