const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const btnNumber = document.querySelectorAll('.numero');
const btnOperator = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual); 

btnNumber.forEach(btn => {
  btn.addEventListener('click', () => display.addNumber(btn.innerHTML));
})

btnOperator.forEach(btn => {
  btn.addEventListener('click', () => display.compute(btn.value));
})
