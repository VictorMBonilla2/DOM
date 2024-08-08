export function LlenarSelectDocumento (listaDocumentos){
    let fragmentoTipoDocumento = document.createDocumentFragment();
    let contadorTipoDocumento = 0;
    listaDocumentos.forEach(elemento => {

        if(contadorTipoDocumento === 0){
            const documentipo = document.createElement("option")
            documentipo.setAttribute("value", "");
            documentipo.text = "Seleccione...";
            fragmentoTipoDocumento.appendChild(documentipo);
            contadorTipoDocumento++;
        }
        const documentipo = document.createElement("option")
        documentipo.setAttribute("value", elemento.tipodocumento);
        documentipo.text = elemento.tipodocumento
        fragmentoTipoDocumento.appendChild(documentipo);
    });
    return fragmentoTipoDocumento;
}