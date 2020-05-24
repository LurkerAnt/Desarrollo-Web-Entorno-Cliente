function createElement(tag) {
    return document.createElement(tag);
}
function getHtmlElement(id) {
    return document.getElementById(id);
}
function getValueAsNumber(id) { // devuelve el value de un input como Number pasandole el id del elemento.
    return Number(getHtmlElement(id).value);
}


function mostrarRombo() {
    const longitudTotalMitadRombo = getValueAsNumber("numero");
    const divText = getHtmlElement("text");
    const alturaTotalRombo = (longitudTotalMitadRombo * 2) - 1;
    const longitudTotalFilas = longitudTotalMitadRombo * 2;
    const caracterRecibido = getHtmlElement("caracter").value;
    let puntoInicioCharacters = 0;
    let numeroElementosPorFila = 0;
    for (let i1 = 0; i1 < alturaTotalRombo; i1++) {
        let stringDeFila = "";
        if (i1 < (Math.floor(longitudTotalFilas / 2))) {
            for (let i2 = 0; i2 <= alturaTotalRombo; i2++) {
                console.log(i2);
                numeroElementosPorFila = 2 * (i1 + 1);
                puntoInicioCharacters = Math.floor((longitudTotalFilas - numeroElementosPorFila) / 2);
                console.log("pIC:" + puntoInicioCharacters);
                if (i2 + 1 <= puntoInicioCharacters) {
                    stringDeFila += "_";
                } else if (i2 + 1 <= puntoInicioCharacters + numeroElementosPorFila) {
                    stringDeFila += caracterRecibido;
                } else if (i2 + 1 > puntoInicioCharacters + numeroElementosPorFila) {
                    console.log("elseif 2");
                    stringDeFila += "_";
                }

            }
            console.log("String de fila:" + stringDeFila);
        }
        console.log("i1:" + i1);
        console.log("control:" + Math.floor(longitudTotalFilas / 2));
        console.log("Elefila:" + numeroElementosPorFila)

        if (i1 >= (Math.floor(longitudTotalFilas / 2))) {
            numeroElementosPorFila -= 2;
            puntoInicioCharacters = (longitudTotalFilas - numeroElementosPorFila)/2;
            console.log("elementos por fila 2:" + numeroElementosPorFila);
           
            for (let i3 = 0; i3 <= alturaTotalRombo; i3++) {
                console.log("pIC2:" + puntoInicioCharacters);

                if (i3 < puntoInicioCharacters) {
                    stringDeFila += "_";
                } else if (i3 < puntoInicioCharacters + numeroElementosPorFila) {
                    stringDeFila += caracterRecibido;
                } else if (i3 >= puntoInicioCharacters + numeroElementosPorFila) {
                    stringDeFila += "_";
                }

            }
        }
        stringDeFila.concat("<br>");
        let stringAddParagraph = createElement("h4");
        stringAddParagraph.innerHTML = `${stringDeFila}`;
        divText.appendChild(stringAddParagraph);

    }

}
