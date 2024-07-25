
export function validarFormulario(event, lista, formulario){
    event.preventDefault() 
    lista.forEach(element => {
        if (element.value.trim() === ""){
            console.log(`El campo ${element.name} esta vacio`);
            element.classList.add("errorInput")
            element.focus();
        } else if(element.name === "Nombre" || element.name === "Apellido"){
            if (element.value.length > 8) {
                console.log(`El campo ${element.name} tiene mucho texto!`);
                element.classList.add("errorInput");
                element.classList.remove("correctInput")
                element.classList.remove("checkedInput")
            }else{
                element.classList.add("checkedInput")
            }
        } else if (element.name === "Telefono" ){
            if (element.value.length > 10) {
                console.log(`El campo ${element.name} tiene mucho texto!`);
                element.classList.add("errorInput");
                element.classList.remove("correctInput")
                element.classList.remove("checkedInput")
            }else{
                element.classList.add("checkedInput")
            }
            
        }else if (element.name === "Direccion" ){
            if (element.value.length > 64) {
                console.log(`El campo ${element.name} tiene mucho texto!`);
                element.classList.add("errorInput");
                element.classList.remove("correctInput")
                element.classList.remove("checkedInput")
            }else{
                element.classList.add("checkedInput")
            }
            
        }else if (element.name === "Correo" ){

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
        else if (element.name === "documento" ){
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


}