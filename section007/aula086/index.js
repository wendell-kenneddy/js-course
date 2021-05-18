// The goal is to program a simple form validator algorithm

const handleForm = {
  userFirstName: document.getElementById('user-first-name'),
  userLastName: document.getElementById('user-last-name'),
  userCpf: document.getElementById('user-cpf'),
  userNick: document.getElementById('user-nick'),
  userPassword: document.getElementById('user-password'),
  userRepeatPassword: document.getElementById('user-repeat-password'),

  getFormValues() {
    return {
      usrFName: this.userFirstName.value,
      usrLName: this.userLastName.value,
      usrCpf: this.userCpf.value,
      usrCleanCpf: this.userCpf.value.replace(/\D+/g, ''),
      usrNick: this.userNick.value,
      usrPwd: this.userPassword.value,
      usrRptPwd: this.userRepeatPassword.value
    }
  },

  getFormHandler({ usrFName, usrLName, usrCpf, usrCleanCpf, usrNick, usrPwd, usrRptPwd }) {
    class FormHandler {
      constructor(usrFName, usrLName, usrCpf, usrCleanCpf, usrNick, usrPwd, usrRptPwd) {
        this.userFirstName = usrFName;
        this.userLastName = usrLName;
        this.userCpf = usrCpf;
        this.userCleanCpf = usrCleanCpf;
        this.userNick = usrNick;
        this.userPassword = usrPwd;
        this.userRepeatPassword = usrRptPwd;
        this.validationResult = true;
      }

      getCpfValidationDigit(array = []) {
        let multiplier = array.length + 1;
        let digit = 0;

        for (const num of array) {
          digit += num * multiplier;
          multiplier--;
        }

        const finalDigit = 11 - (digit % 11);
        return finalDigit;
      }

      getCpfArray() {
        const cpfArray = Array.from(this.userCleanCpf.slice(0, -2));
        const numberCpfArray = cpfArray.map(e => Number(e));
        return numberCpfArray;
      }

      validateCpf() {
        const firstDigit = this.getCpfValidationDigit(this.getCpfArray());
        const secondDigit = this.getCpfValidationDigit([...this.getCpfArray(), firstDigit]);

        if (`${firstDigit}${secondDigit}` !== this.userCleanCpf.slice(-2)) {
          return false;
        }

        return true;
      }

      validateUserNick() {
        if (!this.userNick.match(/^([a-zA-Z0-9]+)$/)) {
          const errorMessage = 'Nome de usuário deve conter somente letras e números.';
          handleForm.showError('nick', errorMessage);
          this.validationResult = false;
        }

        if (this.userNick.length < 3 || this.userNick.length > 12) {
          const errorMessage = 'Nome de usuário deve conter de 3 a 12 caracteres.';
          handleForm.showError('nick', errorMessage);
          this.validationResult = false;
        }
      }

      validateUserPasswords() {
        if (this.userPassword.length < 3 || this.userPassword.length > 12) {
          const errorMessage = 'Senha deve conter de 3 a 12 caracteres.';
          handleForm.showError('password', errorMessage);
          this.validationResult = false;
        }

        if (this.userRepeatPassword !== this.userPassword) {
          const errorMessage = 'Senhas não idênticas.';
          handleForm.showError('password', errorMessage);
          handleForm.showError('repeat-password', errorMessage);
          this.validationResult = false;
        }
      }

      validateFirstThreeFields() {
        const fields = document.querySelectorAll('.to-validate');

        for (const field of fields) {
          if (!field.value) {
            const labelText = field.previousElementSibling.innerHTML.slice(0, -1);
            const fieldId = field.id.replace('user-', '');
            const errorMessage = `Campo ${labelText} deve ser preenchido.`;

            handleForm.showError(fieldId, errorMessage);
            this.validationResult = false;
          }

          if (field.id.includes('cpf')) {
            if (!this.validateCpf()) {
              const errorMessage = 'CPF inválido.';
              handleForm.showError('cpf', errorMessage);
              this.validationResult = false;
            }
          }
        }
      }

      clearErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-messages');

        for (const errorMessageContainer of errorMessages) {
          errorMessageContainer.innerHTML = '';
        }
      }
    }

    return new FormHandler(usrFName, usrLName, usrCpf, usrCleanCpf, usrNick, usrPwd, usrRptPwd)
  },

  showError(field, message) {
    const errorFields = document.querySelectorAll('.error-messages');
    const errorFieldId = `user-${field}-error-messages`;
    const errorMessageP = document.createElement('p');
    let targetErrorField = '';

    for (const errorField of errorFields) {
      if (errorField.id === errorFieldId) {
        targetErrorField = errorField;
        break;
      }
    }

    errorMessageP.innerText = message;
    targetErrorField.appendChild(errorMessageP);
  },

  registerUser(e) {
    e.preventDefault();
    const formValues = this.getFormValues();
    const formHandler = this.getFormHandler(formValues);

    formHandler.clearErrorMessages();
    formHandler.validateFirstThreeFields();
    formHandler.validateUserNick();
    formHandler.validateUserPasswords();

    if (formHandler.validationResult) {
      alert('Cadastro realizado com sucesso!')
    }
  }
};

const app = {
  registerBtn: document.getElementById('register-user'),

  init() {
    this.registerBtn.addEventListener('click', e => handleForm.registerUser(e))
  }
};

app.init();
