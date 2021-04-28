// The goal is to create a factory function that returns a calculator.

function Calculator() {
  this.operation = document.getElementById('operation');

  this.addDigit = digit => this.operation.value += digit;

  this.eraseDigit = () => this.operation.value = this.operation.value.slice(0, -1);

  this.clearOperation = () => this.operation.value = '';

  this.validateOperation = () => {
    if (!this.operation.value) {
      throw new Error('Por favor, digite uma operação.');
    }

    if (this.operation.value && this.operation.value.replace(/\D/g, '') == '') {
      throw new Error('Por favor, digite uma operação válida.');
    }

    if (this.operation.value && this.operation.value.endsWith('-') ||
      this.operation.value && this.operation.value.endsWith('*') ||
      this.operation.value && this.operation.value.endsWith('/') ||
      this.operation.value && this.operation.value.endsWith('+')) {
      throw new Error('Por favor, digite uma operação válida.');
    }
  };

  this.executeOperation = () => {
    try {
      this.validateOperation();
      this.operation.value = eval(this.operation.value);
    } catch (error) {
      alert(error.message);
    }
  }

  this.watchBtnEnterPress = () => {
    window.addEventListener('keypress', e => {
      const key = e.key;

      if (key == 'Enter') this.executeOperation();
    })
  }

  this.init = () => {
    const btnGroup = document.querySelector('.btn-group');
    btnGroup.addEventListener('click', e => {
      const digit = e.target.innerText;
      const target = e.target;

      if (target.classList.contains('digit')) {
        this.addDigit(digit);
        return;
      }

      if (target == document.getElementById('action-erase')) {
        this.clearOperation();
        return;
      }

      if (target == document.getElementById('action-erase-digit')) {
        this.eraseDigit();
        return;
      }

      if (e.target == document.getElementById('action-calculate')) {
        this.executeOperation();
        return;
      }
    });

    this.watchBtnEnterPress();
  }
}

const myCalculator = new Calculator;
myCalculator.init();
