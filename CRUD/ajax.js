import { URL } from "./config.js";
export  async function ajax(url){

    const fetchAjax= await fetch(`${URL}/${url}`)
    
    const result = await fetchAjax.json();

    return result;
}
export const enviar = async (endpoint, options) => {
    try{
      let solicitud = await fetch(`${URL}/${endpoint}`, options);
      let data = await solicitud.json();
      return data;
    } catch (error) { 
      return error
    }
}