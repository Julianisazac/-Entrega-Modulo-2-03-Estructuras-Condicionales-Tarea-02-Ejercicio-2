let nombre = (prompt("nombre del paciente"));
let tipoActividad = prompt("Tipo de actividad sentarse o dormir");
let actividad1 = ("dormir");
let actividad2 = ("sentarse");



if(tipoActividad = actividad1){
    let tiempoDormido= Number (prompt("Tiempo dormido en minutos"));
    let calorias1 = (tiempoDormido * 1.08);
    document.write(nombre + " tus calorias dormido son: " + calorias1)
} else(actividad2)=>{
    let tiempoSentado = Number (prompt("Tiempo sentado en minutos"));
    let calorias2 = (tiempoSentado * 1.66);
    document.write(nombre + " tus calorias sentado son: " + calorias2);
}







/*if(actividad1){
    let calorias1 = (tiempoDormido * 1.08);
} else(actividad2)=>{
    let calorias2 = (tiempoSentado * 1.66)
}

document.write(calorias1)
document.write(calorias2)*/