const toggleToast = (message = 'Por favor, preencha todos os campos.') => {
  const toast = document.querySelector('div.toast')
  toast.firstElementChild.innerHTML = message
  toast.classList.toggle('hide')
}

const handleIMC = {
  calculateIMC(person) {
    const { weight, height } = person

    return (weight / (height * height)).toFixed(2)
  },

  formatValues(person) {
    let { weight, height } = person

    weight = Number.parseFloat(weight).toFixed(2)
    height = Number.parseFloat(height).toFixed(2)

    return {
      weight,
      height
    }
  },

  printResult(imc) {
    let output = `${imc}`

    if (imc < 18.5) {
      output += ' - Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
      output += ' - Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
      output += ' - Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
      output += ' - Obesidade grau 1'
    } else if (imc >= 35 && imc <= 39.9) {
      output += ' - Obesidade grau 2'
    } else if (imc >= 40) {
      output += ' - Obesidade grau 3'
    }

    const p = document.querySelector('p#result')
    p.innerHTML = output
  }
}

const Form = {
  weight: document.querySelector('input#weight'),
  height: document.querySelector('input#height'),

  getData() {
    return {
      weight: this.weight.value,
      height: this.height.value
    }
  },

  validateFields() {
    if (this.weight.value == '' || this.height.value == '') {
      throw new Error('Por favor, preencha todos os campos.')
    }
  },

  clearFields() {
    this.weight.value = ''
    this.height.value = ''
  },

  submit(event) {
    event.preventDefault()

    try {
      this.validateFields()
      const person = handleIMC.formatValues(this.getData())
      const IMC = handleIMC.calculateIMC(person)
      handleIMC.printResult(IMC)
      this.clearFields()
    } catch (error) {
      toggleToast(error.message)
    }
  }
}