let count = 0;

function MostrarNumero() {
    //.value coge el valor del element INPUT html, no funciona con otros (maybe), puede que funcione con text:area
    let inputNumber = Number(document.getElementById("numero").value);

    if (inputNumber < 1) {
        alert("El numero tiene que ser superior a 0");
    }
    if (inputNumber > 40) {
        alert("El numero tiene que ser inferior a 40");
    }

    count++;
    //coge un elemento html con id que le pases
    const divText = document.getElementById("text");
    //te devuelve el html interno de un tag HTML, igual que sacas puedes hacer un SET de los tags internos.
    //esto ayuda a hacer debug
    // el ${variable} introduce el valor de la variable en el html, o en el texto que estes pasando, (hace un toString del elemento)
    divText.innerHTML += `----- ITERATION ${count} for ${inputNumber} -----<br>`;
    for (let i = inputNumber; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            divText.innerHTML += i;
        }
        divText.innerHTML += "<br>";
    }
}