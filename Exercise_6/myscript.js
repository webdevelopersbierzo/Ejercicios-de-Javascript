let horas  = parseInt(prompt("Intruduce las horas: "));
let minutos = parseInt(prompt("Introduce los segundos: "))

let resultado = ( horas * 60 * 60 ) + (minutos * 60);
alert(horas + "horas y " + minutos + "minutos son: " + resultado + " segundos");