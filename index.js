const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const btnNumber = document.querySelectorAll('.numero');
const btnOperators = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual); 

btnNumber.forEach(btn => {
  btn.addEventListener('click', () => display.addNumber(btn.innerHTML));
})
