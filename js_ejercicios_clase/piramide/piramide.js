function mostrarNumeros(inputId) { 
    var htmlElement = document.getElementById("text");
    var input = document.getElementById(inputId);
    if (input.value) {
        var numeroInput = parseInt(input.value, 10);
        var text = "";
        for (var numero = numeroInput; numero > 0; numero--) {
            for (var i = 0; i < numero; i++) {
                text += numero.toString();
            }
            text += "<br>";
        }
    }
    
    htmlElement.innerHTML = text;
}

function textClicked() {
    alert("Text was clicked!");
}

