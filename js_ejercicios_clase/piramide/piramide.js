function mostrarNumeros() { 
    var htmlElement = document.getElementById("text");
    var text = "";
    for (var numero = 9; numero > 0; numero--) {
        for (var i = 0; i < 9 - numero; i++) {
            text += numero.toString();
        }
        text += "<br>";
    }
    htmlElement.innerHTML = text;
}

function textClicked() {
    alert("Text was clicked!");
}

