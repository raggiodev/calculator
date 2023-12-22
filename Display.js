class Display {
  constructor(displayPrevValue, displayCurrentValue) {
    this.displayCurrentValue = displayCurrentValue;
    this.displayPrevValue = displayPrevValue;
    this.calculator = new Calculator();
    this.OperatorType = undefined;
    this.currentValue = '';
    this.prevValue = '';
    this.symbols = { add: '+', substract: '-', multiply: 'x', divide: '%' }
  }

  delete() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
    this.printValue();
  }

  deleteAll() {
    this.currentValue = '';
    this.prevValue = '';
    this.OperatorType = undefined;
    this.printValue();
  }

  compute(type) {
    this.OperatorType !== 'equal' && this.calc();
    this.OperatorType = type;
    this.prevValue = this.currentValue || this.prevValue;
    this.currentValue = '';
    this.printValue();
  }

  addNumber(n) {
    if(n === '.' && this.currentValue.includes('.')) return

    this.currentValue = this.currentValue.toString() + n.toString();
    this.printValue();
  }

  printValue() {
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayPrevValue.textContent = `${this.prevValue} ${this.symbols[this.OperatorType] || ''}`;
  }

  calc() {
    const prevValue = parseFloat(this.prevValue);
    const currentValue = parseFloat(this.currentValue);

    if(isNaN(currentValue) || isNaN(prevValue)) return

    this.currentValue = this.calculator[this.OperatorType](prevValue, currentValue);
  }
}