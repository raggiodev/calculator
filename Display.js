class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculator = new Calculator();
    this.OperatorType = undefined;
    this.valorActual = '';
    this.ValorAnterior = '';
  }

  addNumber(n) {
    if(n === '.' && this.valorActual.includes('.')) return

    this.valorActual = this.valorActual.toString() + n.toString();
    this.printValue();
  }

  printValue() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = this.ValorAnterior;
  }

  delete() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.printValue();
  }

  deleteAll() {
    this.valorActual = '';
    this.ValorAnterior = '';
    this.OperatorType = undefined;
    this.printValue();
  }
}