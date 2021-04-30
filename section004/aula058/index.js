// The goal is to create a factory function that returns a calculator.

const createCalculator = () => {
  return {
    operation: document.getElementById('operation'),

    addDigit(digit) {
      this.operation.value += digit;
    },

    eraseDigit() {
      this.operation.value = this.operation.value.slice(0, -1);
    },

    clearOperation() {
      this.operation.value = '';
    },

    validateOperation() {
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
    },

    executeOperation() {

      try {
        this.validateOperation();
        this.operation.value = eval(this.operation.value);
      } catch (error) {
        alert(error.message);
      }
    },

    init() {
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

      window.addEventListener('keypress', e => {
        const key = e.key;

        if (key == 'Enter') {
          this.executeOperation();
        }
      })
    }
  }
}

const myCalculator = createCalculator();
myCalculator.init();
