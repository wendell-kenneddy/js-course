export default class FormHandler {
  static getInfo() {
    const pwdLength = document.getElementById('pwd-length');
    const pwdWithNumbers = document.getElementById('pwd-with-numbers');
    const pwdWithUpperCase = document.getElementById('pwd-with-uppercase');
    const pwdWithLowerCase = document.getElementById('pwd-with-lowercase');
    const pwdWithSymbols = document.getElementById('pwd-with-symbols');

    return {
      pwdLength: Number(pwdLength.value),
      pwdWithNumbers: pwdWithNumbers.checked,
      pwdWithUpperCase: pwdWithUpperCase.checked,
      pwdWithLowerCase: pwdWithLowerCase.checked,
      pwdWithSymbols: pwdWithSymbols.checked
    };
  }

  static validateOptions() {
    const { pwdLength, pwdWithNumbers, pwdWithUpperCase, pwdWithLowerCase, pwdWithSymbols } = FormHandler.getInfo();

    if (!pwdLength || pwdLength <= 0) {
      throw new Error('Por favor, indique o número de caracteres na senha.');
    }

    if (pwdLength > 100) {
      throw new Error('O número máximo de caracteres é 100.');
    }

    if (!pwdWithNumbers && !pwdWithUpperCase &&
      !pwdWithLowerCase && !pwdWithSymbols) {
      throw new Error('Por favor, marque ao menos uma opção.');
    }
  }
}