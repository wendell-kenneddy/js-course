const cpfGenerationUtils = {
  generateRandomNum(cap) {
    return Math.round(Math.random() * cap);
  },

  generateRawDigits() {
    let output = '';

    for (let i = 0; i < 9; i++) {
      const randNum = cpfGenerationUtils.generateRandomNum(9);
      output += randNum;
    }

    return output;
  },

  placeCharInCpf(cpf, charAndIndexArray) {
    const digitsArray = Array.from(cpf);

    for (const [char, index] of charAndIndexArray) {
      digitsArray.splice(index, 0, char);
    }

    return digitsArray.join('');
  }
}

export default class Cpf {
  constructor(rawCpf) {
    if (!rawCpf) return;

    this.rawCpf = rawCpf;
    this.cleanCpf = rawCpf.replace(/\D+/g, '');
  }

  static generateCpf() {
    const rawDigits = cpfGenerationUtils.generateRawDigits();
    const rawDigitsArray = Array.from(rawDigits);
    const digitsAndIndex = [['.', 3], ['.', 7]];
    const rawCpf = cpfGenerationUtils.placeCharInCpf(rawDigits, digitsAndIndex);
    const firstDigit = Cpf.getValidationDigit(rawDigitsArray);
    const secondDigit = Cpf.getValidationDigit([...rawDigitsArray, firstDigit]);
    const completeCpf = rawCpf + `-${firstDigit}${secondDigit}`
    return new Cpf(completeCpf);
  }

  static getValidationDigit(arr) {
    if (!arr || !Array.isArray(arr)) return;

    let multiplyCount = arr.length + 1;
    const digit = arr.reduce((ac, v) => {
      ac += v * multiplyCount;
      multiplyCount--;
      return ac;
    }, 0);
    const finalDigit = 11 - (digit % 11);

    // The digit can't be greater than 9, so if it is, then 0 is returned.
    return finalDigit > 9 ? 0 : finalDigit;
  }

  static getCpfArray(cpf) {
    if (!cpf) return;
    return Array.from(cpf).map(e => Number(e));
  }

  validateCpf() {
    const isSequence = this.cleanCpf[0].repeat(11) === this.cleanCpf;
    if (!this.rawCpf) return ('Nenhum CPF especificado.');
    if (this.cleanCpf.length != 11) return ('CPF inválido.');
    if (isSequence) return ('O CPF especificado não pode ser uma sequência.')

    // Slice the last two digits, because they are used just for validation;
    const cpfArray = Cpf.getCpfArray(this.cleanCpf.slice(0, -2));
    const firstDigit = Cpf.getValidationDigit(cpfArray);
    const secondDigit = Cpf.getValidationDigit([...cpfArray, firstDigit]);
    const validation = `${firstDigit}${secondDigit}` === this.rawCpf.slice(-2);

    if (!validation) return 'CPF inválido.';
    return 'CPF válido.';
  }
}
