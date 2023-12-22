class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculator = new Calculator();
    this.OperatorType = undefined;
    this.valorActual = '';
    this.valorAnterior = '';
    this.symbols = {
      add: '+',
      substract: '-', 
      multiply: 'x',
      divide: '%',
    }
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

  compute(type) {
    this.OperatorType !== 'equal' && this.calc();
    this.OperatorType = type;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = '';
    this.printValue();
  }

  addNumber(n) {
    if(n === '.' && this.valorActual.includes('.')) return

    this.valorActual = this.valorActual.toString() + n.toString();
    this.printValue();
  }

  printValue() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.symbols[this.OperatorType] || ''}`;
  }


  calc() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if(isNaN(valorActual) || isNaN(valorAnterior)) return
    this.valorActual = this.calculator[this.OperatorType](valorAnterior, valorActual);
  }
}