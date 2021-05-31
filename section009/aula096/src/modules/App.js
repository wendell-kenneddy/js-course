import Cpf from './Cpf.js';

export default class App {
  static init() {
    const resultContainer = document.getElementById('generated-cpf');
    const generateCpfBtn = document.getElementById('generate-cpf');

    generateCpfBtn.addEventListener('click', e => {
      const cpf = Cpf.generateCpf();
      resultContainer.innerHTML = cpf.rawCpf;
    });
  }
}
