// Cpf validator and generator using classes

/* class Cpf {
    constructor(rawCpf) {
      this.rawCpf = rawCpf;
      this.cleanCpf = rawCpf.replace(/\D+/g, '');
    }

    getCpfArray() {
      return Array.from(this.cleanCpf.slice(0, -2)).map(e => Number(e));
    }

    validate() {
      const patternCheck = this.rawCpf.trim().match(/^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/);

      if (!this.rawCpf) {
        return 'Por favor, informe um CPF.'
      }

      if (!patternCheck) {
        return 'O CPF informado não segue o padrão <123.456.789-01>.'
      }

      const cpfArray = this.getCpfArray();
      const firstDigit = Cpf.getDigit(cpfArray);
      const secondDigit = Cpf.getDigit([...cpfArray, firstDigit]);

      if (`${firstDigit}${secondDigit}` !== this.cleanCpf.slice(-2)) {
        return this.rawCpf + ' é um CPF inválido.'
      }

      return this.rawCpf + ' é um CPF válido.';
    }

    static getDigit(array) {
      let multiplier = array.length + 1;
      const digit = array.reduce((ac, v) => {
        ac += v * multiplier;
        multiplier--;
        return ac;
      }, 0);
      const finalDigit = 11 - (digit % 11);

      return finalDigit > 9 ? 0 : finalDigit;
    }

    static generateCpf() {
      let cpfString = '';
      let cpfArray = '';
      let firstDigit = '';
      let secondDigit = '';
      let finalCpf = '';

      for (let i = 0; i < 9; i++) {
        const randomNum = Math.round(Math.random() * 9);

        cpfString += `${randomNum}`;
      }

      cpfArray = Array.from(cpfString).map(e => Number(e));
      firstDigit = Cpf.getDigit(cpfArray);
      secondDigit = Cpf.getDigit([...cpfArray, firstDigit]);
      finalCpf = `${cpfString}-${firstDigit}${secondDigit}`;

      finalCpf = Array.from(finalCpf);
      finalCpf.splice(3, 0, '.');
      finalCpf.splice(7, 0, '.');
      finalCpf = finalCpf.join('');

      return new Cpf(finalCpf);
    }
  }
 */
