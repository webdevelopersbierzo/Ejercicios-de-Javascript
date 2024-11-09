let precio = prompt("Introduce el precio del producto");
let iva = prompt("Introduce el iva del procucto");

let resultado = (parseFloat(precio) + ((parseFloat(precio) * iva) / 100));
console.log(resultado);