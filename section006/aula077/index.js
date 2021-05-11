// CPF Validator
// Sample: '274.961.051-63'

function CPF(cpf) {
  this.rawCPF = cpf;
}

CPF.prototype.getCleanCPF = function () {
  return Array.from(this.rawCPF.slice(0, -2).replace(/\D+/g, '')).map(e => Number(e));
}

CPF.prototype.getFirstValidationDigit = function () {
  let multiplier = 10;
  let digit = this.getCleanCPF().reduce((ac, v) => {
    ac += v * multiplier;
    multiplier--;
    return ac;
  }, 0);
  digit = 11 - (digit % 11);

  return digit > 9 ? 0 : digit;
};

CPF.prototype.getSecondValidationDigit = function () {
  let multiplier = 11;
  let digit = [...this.getCleanCPF(), this.getFirstValidationDigit()]
    .reduce((ac, v) => {
      ac += v * multiplier;
      multiplier--;
      return ac;
    }, 0);
  digit = 11 - (digit % 11);

  return digit > 9 ? 0 : digit;
};

CPF.prototype.validateCPF = function () {
  const firstValidationDigit = this.getFirstValidationDigit();
  const secondValidationDigit = this.getSecondValidationDigit();
  const finalDigit = `${firstValidationDigit}${secondValidationDigit}`;

  if (finalDigit !== this.rawCPF.slice(-2)) {
    throw new Error(`${this.rawCPF} é um CPF inválido.`)
  }

  showResult(`${this.rawCPF} é um CPF válido.`);
}

const showResult = (message) => {
  const resultContainer = document.getElementById('validation-result');
  resultContainer.innerHTML = message;
};

const validateCPFFormat = () => {
  const CPF = document.getElementById('cpf');
  const patternCheck = CPF.value.trim().match(/^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/);

  if (CPF.value === '' || !patternCheck) {
    throw new Error('Por favor, digite um CPF no formato indicado.')
  }
};

const tryValidation = () => {
  try {
    validateCPFFormat();
    const cpfToValidate = new CPF(document.getElementById('cpf').value);
    cpfToValidate.validateCPF();
  } catch (error) {
    showResult(error.message);
  }
}

const app = {
  init() {
    const validateBtn = document.getElementById('validate-btn');
    validateBtn.addEventListener('click', e => tryValidation());
  }
};

app.init();
