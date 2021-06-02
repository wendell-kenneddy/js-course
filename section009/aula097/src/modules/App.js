import FormHandler from './FormHandler.js';
import PasswordHandler from './PasswordHandler.js';

export default class App {
  static init() {
    const generatedPwdContainer = document.getElementById('generated-password');
    const generatePwdBtn = document.getElementById('generate-password');

    generatePwdBtn.addEventListener('click', e => {
      e.preventDefault();

      try {
        FormHandler.validateOptions();
        const pwdHandler = new PasswordHandler(FormHandler.getInfo());
        const password = pwdHandler.generatePwd();
        generatedPwdContainer.innerText = password;
      } catch (error) {
        alert(error.message);
      }
    })
  }
}