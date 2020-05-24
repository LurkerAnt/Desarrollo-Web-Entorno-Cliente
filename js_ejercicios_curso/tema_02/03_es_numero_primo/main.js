

function EsNumeroPrimo() {
    
    function createElement(tag) {
        return document.createElement(tag);
    }
    function getHtmlElement(id) {
        return document.getElementById(id);
    }
    
    /*
    * devuelve el value de un input como Number pasandole el id del elemento.  
    *.value coge el valor del element INPUT html, 
    * no funciona con otros (maybe), puede que funcione con text:area
    */

    function getValueAsNumber(id) { 
        return Number(getHtmlElement(id).value);
    }
    
    let inputNumber = getValueAsNumber("numero");

    if (inputNumber < 1) {
        alert("El numero tiene que ser superior a 0");
    }
    
    //coge un elemento html con id que le pases
    const divText = document.getElementById("text");
    //te devuelve el html interno de un tag HTML, igual que sacas puedes hacer un SET de los tags internos.
    //esto ayuda a hacer debug
    // el ${variable} introduce el valor de la variable en el html, o en el texto que estes pasando, (hace un toString del elemento)

    /*la variable contadorDeDivisiones nos permite contar el numero de veces que
    * el numero se ha dividido con resto 0, si es primo solo puede ser 2, por lo
    * que si lo supera no es primo.
    */
    let contadorDeDivisiones=0;
    

    for (let i = 1; i <=inputNumber; i++) {
        if ((inputNumber%i)==0){
            contadorDeDivisiones++;
        }
    }


    if (contadorDeDivisiones<=2) {
        divText.innerHTML="<h1>Es Primo.</h1>";
    } else {
        divText.innerHTML="<h1>No es Primo.</h1>";
    }
}