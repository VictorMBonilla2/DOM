export function vaciarInputs(lista){
    lista.forEach(element => {
        element.classList.remove("errorInput");
        element.classList.remove("correctInput");
        element.classList.remove("checkedInput");
        element.value= "";
    });
}