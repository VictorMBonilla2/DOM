export default function Validarcorreo(emai){
    /^[\w-.]+@[\w-.]+\.([\w-.]{2,3}){1,2}$/.test(emai);
}