function mostrarNumeros(inputId) { 
    var htmlElement = document.getElementById("text");
    var input = document.getElementById(inputId);
    if (input.value) {
        var numeroInput = parseInt(input.value, 10);
        var text = "";
        
        for(var numero=1; numero<=numeroInput; numero++){
            for (var i = 0; i < numeroImput; i++) {
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

