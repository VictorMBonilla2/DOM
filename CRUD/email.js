
export function email(input){
    let re = /^[a-zA-Z._]*@{0,19}/i.test(input)
    console.log(`El campo ${input} cumple con el filtro? : ${re}`);
    return re;
}