function tabla() {
    var numeroC = prompt("Introduce el numero de filas");
    var numeroF = prompt("Introduce el numero de columnas");
    var cadena = "";
    cadena += "<table>";
    var i = numeroC * numeroF;
    for (var a = 1; a <= numeroC; a++) {
        cadena += "<tr>";
        for (var b = 1; b <= numeroF; b++, i--) {
            cadena += "<td>";
            cadena += i;
            cadena += "</td>";
        }
        cadena += "</tr>";
    }
    cadena += "</table>";
    document.getElementById("tabla").innerHTML = cadena;
}