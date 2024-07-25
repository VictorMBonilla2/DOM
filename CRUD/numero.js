export function numero(input){
    let re = /^[0-9]+$/.test(input)
    console.log(`El campo ${input} cumple con el filtro? : ${re}`);
    return re;
}