export function Escucharteclado (linea,lista){
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

    lista.forEach(element => {
        element.addEventListener("blur", (event) => {
            if(element.value.trim() != ""){
                element.classList.remove("correctInput")
                element.classList.add("checkedInput")
            }

            });
    });
}