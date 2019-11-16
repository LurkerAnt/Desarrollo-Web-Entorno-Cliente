//hacerlo con arrays bidimensionales [años][meses][dias]

var agenda = [];
function  recordDate(){
    var actividad = document.getElementById("actividad");
    var fecha = document.getElementById("fecha");
    agenda.push({ //Guardas un json con atributos actividad y fecha
        actividad: actividad.value,
        fecha: new Date(fecha.value)
    });

    //Reset a los inputs y sus valores a cero
    actividad.value = "";
    fecha.value = "";
    order();
}

function order() {
    /* sort sobreescrito, llama 
    Tomara las dos fechas con getTime si la primera es mayor devuelve positivo pro lo 
    que el segundo que es menor se cambia en posicion.
    */
    
    agenda.sort((before, after) => {
        return before.fecha.getTime() - after.fecha.getTime();
    });
    
}

function showAgenda(){
    var htmlElement =document.getElementById("mostrarAgenda");
    var text ="";
    for(var i =0;i < agenda.length; i++){
        var item = agenda[i];
        //com comillas inversas se pude meter variables de objetos directamente como printd de java
        text+= `${item.actividad} : ${item.fecha.toDateString()}`;
        text+="<br>";
    }
    htmlElement.innerHTML=text;
}


