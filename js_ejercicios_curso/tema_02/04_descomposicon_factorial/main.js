function createElement(tag) {
    return document.createElement(tag);
}
function getHtmlElement(id) {
    return document.getElementById(id);
}
function getValueAsNumber(id) { // devuelve el value de un input como Number pasandole el id del elemento.
    return Number(getHtmlElement(id).value);
}

function esNumeroPrimo(numero) {
    let contadorDeDivisiones = 0;
    for (let i = 1; i <= numero; i++) {
        if ((numero % i) == 0) {
            contadorDeDivisiones++;
        }
    }


    if (contadorDeDivisiones <= 2) {
        return true;
    } else {
        return false;
    }
}

function descomposicionFactorial() {
    //coge el divText y numero de html
    const divContainer = getHtmlElement("text");
    const inputNumber = getValueAsNumber("numero");
    //copia del numero para romperlo
    let inputNumber2=inputNumber;
    //array vacio para almacenar la descomposicion factorial
    const factoresPrimos = [];

    if (inputNumber < 1) {
        alert("El numero tiene que ser superior a 0");
    }
    
    //si es primo se pasa el número directamente
    if (esNumeroPrimo(inputNumber)==true){
        factoresPrimos.push(inputNumber);
    } else {
        //sino empieza a dividir hasta llegar a la mitad
        for (let index = 2; index <= inputNumber2; index++) {
            //comprueba si el número i es primo, si no lo es no entra.
            if(esNumeroPrimo(index)===true){
                if((inputNumber2%index)===0){
                    inputNumber2=inputNumber2/index;
                    factoresPrimos.push(index);
                        
                }

            }
            if (index>inputNumber2){
                index=2;
            }
        }
    }
    //convierte el array en un string 5con , y espacio
    let stringNumero= factoresPrimos.join(', ');
    //crea un <h4>
    const contenedorString=createElement("h4");
    //introduce el string al h4
    contenedorString.innerHTML=`${stringNumero}`;
    //introduce el hijo dentro del div
    divContainer.appendChild(contenedorString);

    return false;
}


