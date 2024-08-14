export async function ObtenerDocumentos() {
    
    const responseDocument = await fetch("http://localhost:3000/documento");

    const result1 = await responseDocument.json();

    return result1
}