export function Valdartexto(input){
    let re = /^[a-zá-ý\s]+$/i.test(input)
    console.log(`El campo ${input} cumple con el filtro? : ${re}`);
    return re;
}

export function Validaralfanumerico(input){
    let re = /\w/g.test(input)
    console.log(`El campo ${input} cumple con el filtro? : ${re}`);
    return re;
}