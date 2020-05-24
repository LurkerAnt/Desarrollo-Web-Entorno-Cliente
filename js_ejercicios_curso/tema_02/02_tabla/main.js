function createElement(tag) {
    return document.createElement(tag);
}
function getHtmlElement(id) {
    return document.getElementById(id);
}
function getValueAsNumber(id) { // devuelve el value de un input como Number pasandole el id del elemento.
    return Number(getHtmlElement(id).value);
}
function createTable() {
    const divContainer = getHtmlElement("table-container");
    divContainer.innerHTML = "";
    // crea el tag html que le pases
    const table = createElement("table"); // <table></table>
    divContainer.appendChild(table);
    
    const columns = getValueAsNumber("columns");
    const rows = getValueAsNumber("rows");

    //multiplica filas por columnas y almacena
    let multiliedNumber= columns*rows;


    for (let row = 0; row < rows; row++) {
        const tr = createElement("tr");
        for (let column = 0; column < columns; column++) {
            const td = createElement("td");
            td.innerHTML = `${multiliedNumber}`;
            // mete un hijo de ese elemento que hemos creado con createElement en el tag de el padre.
            tr.appendChild(td);
            multiliedNumber--;
        }
        table.appendChild(tr);
    }


}