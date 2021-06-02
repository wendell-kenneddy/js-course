export default class PasswordHandler {
  constructor({ pwdLength, pwdWithNumbers, pwdWithUpperCase, pwdWithLowerCase, pwdWithSymbols }) {
    this.pwdLength = pwdLength;
    this.pwdWithNumbers = pwdWithNumbers;
    this.pwdWithUpperCase = pwdWithUpperCase;
    this.pwdWithLowerCase = pwdWithLowerCase;
    this.pwdWithSymbols = pwdWithSymbols;
  }

  checkNullOptions() {
    if (!this.pwdWithNumbers && !this.pwdWithUpperCase &&
      !this.pwdWithLowerCase && this.pwdWithSymbols) {
      throw new Error('Por favor, marque ao menos uma opção.')
    }
  }

  shuffleString(string) {
    const strArray = Array.from(string);
    const length = strArray.length;

    for (let i = length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      let temporaryLetter = strArray[i];
      strArray[i] = strArray[rand];
      strArray[rand] = temporaryLetter;
    }

    return strArray.join('');
  }

  filterDefaultString() {
    let defaultString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*^:><}{[]';

    if (!this.pwdWithNumbers) {
      defaultString = defaultString.replace(/\d+/g, '');
    }

    if (!this.pwdWithUpperCase) {
      const strArray = Array.from(defaultString);
      const noUpperCaseString = strArray.filter(l => l.replace(/[A-Z]/, '') !== '');
      defaultString = noUpperCaseString.join('');
    }

    if (!this.pwdWithLowerCase) {
      const strArray = Array.from(defaultString);
      const noLowerCaseString = strArray.filter(l => l.replace(/[a-z]/, '') !== '');
      defaultString = noLowerCaseString.join('');
    }

    if (!this.pwdWithSymbols) {
      const strArray = Array.from(defaultString);
      const noSymbolString = strArray.filter(l => l.replace(/[!@#$%&*^:><}{}\[\]]/, '') !== '');
      defaultString = noSymbolString.join('');
    }

    return defaultString;
  }

  generatePwd() {
    const shuffledString = this.shuffleString(this.filterDefaultString());
    let pwd = '';

    for (let i = 0; i < this.pwdLength; i++) {
      const rand = Math.floor(Math.random() * (shuffledString.length - 1));
      pwd += shuffledString[rand];
    }

    return pwd;
  }
}
