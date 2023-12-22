class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculator = new Calculator();
    this.OperatorType = undefined;
    this.valorActual = '';
    this.calorAnterior = '';
  }

  addNumber(n) {
    if(n === '.' && this.valorActual.includes('.')) return

    this.valorActual = this.valorActual.toString() + n.toString();
    this.printValue();
  }

  printValue() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = this.valorAnterior;
  }

  delete() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.printValue();
  }

  deleteAll() {
    this.valorActual = '';
    this.valorAnterior = '';
    this.OperatorType = undefined;
    this.printValue();
  }

  calc() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if(isNaN(valorActual) || isNaN(valorAnterior)) return
    this.valorActual = this.calculator[this.OperatorType](valorAnterior, valorActual);
  }
}