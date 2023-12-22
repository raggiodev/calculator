const displayprevValue = document.getElementById('prev-value');
const displaycurrentValue = document.getElementById('current-value');
const btnNumber = document.querySelectorAll('.numb');
const btnOperator = document.querySelectorAll('.operator');

const display = new Display(displayprevValue, displaycurrentValue); 

btnNumber.forEach(btn => {
  btn.addEventListener('click', () => display.addNumber(btn.innerHTML));
})

btnOperator.forEach(btn => {
  btn.addEventListener('click', () => display.compute(btn.value));
})
