
for (let alumno= 1; alumno<=7; alumno++){
    let nombre = prompt("Cual es tu nombre?")
alert (nombre + " " + "eres el alumno" + " " + alumno);
let nota= Number(prompt("Cual es tu nota de matematicas"))
let notados= Number(prompt ("Cual es tu nota en Historia"))
function promedio(nota, notados){
    return (nota+notados)/2;

}
let resultado= promedio(nota,notados)
    if (resultado<=6){
    alert("estas desaprobado" + " " + nombre + " " + "y tu nota es un" + " " + resultado)
}
    else{
    alert("estas aprobado" + " " + nombre + " " + "y tu nota es un" + " " + resultado)
}

    

}