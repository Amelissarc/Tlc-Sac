const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const calculadora = new Calculadora ();

console.log(calculadora.sumar(2,3))
console.log(calculadora.restar(2,3))
console.log(Calculadora.dividir(2,3))
console.log(Calculadora.multiplicar(2,3))