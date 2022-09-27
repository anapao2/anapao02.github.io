/* function aCelsius(farenheit) {
    console.log('convirtiendo F a C');
    return (farenheit - 32) /1.8;
}

let celsius1 = aCelsius(100);
console.log(celsius1);
let celsius2 = aCelsius(75);
console.log(celsius2);

}
*/

function saludo(nombre){
  alert('Hola '+ nombre);
}
function ProcesarEntradaDeDatos(callback){
  const nombre = prompt('Tu Nombre');
  callback(nombre);
}
ProcesarEntradaDeDatos(saludo);
