const handleNum = {
  inp: document.getElementById('inp-num'),
  container: document.querySelector('div#result'),
  toast: document.querySelector('div.toast'),

  gatherInput() {
    const value = document.getElementById('inp-num').value

    return value
  },

  formatValue() {
    let value = this.gatherInput().toString()
    let formattedValue = 0

    value[0] == 0 && value[1] != '.' || value[0] == '-'
      ? formattedValue = parseFloat(Number(`0.${value.substring(1)}`))
      : formattedValue = parseFloat(Number(value))

    return formattedValue
  },

  handleValidations(validation) {
    let result = ''

    if (validation == 'isInteger') {
      Number.isInteger(this.formatValue())
        ? result = 'O número é um Integer'
        : result = 'O número não é um Integer'
    } else {
      Number.isNaN(this.formatValue())
        ? result = 'O número é um NaN'
        : result = 'O número não é um NaN'
    }

    return result
  },

  handleOutput() {
    let output = `Seu número foi ${this.formatValue()}.||A raiz quadrada do número digitado é igual ${Math.sqrt(this.formatValue())}.||${this.handleValidations('isInteger')}.||${this.handleValidations()}.||Arredondado para baixo é igual a ${Math.floor(this.formatValue())}.||Arredondado para cima é igual a ${Math.ceil(this.formatValue())}.||Com duas casas decimais é igual a ${this.formatValue().toFixed(2)}.`

    output = output.split("||")

    return output
  },

  clearResult() {
    this.container.innerHTML = ''
  },

  printResult() {
    this.clearResult()
    this.handleOutput().forEach(e => {
      p = document.createElement('p')
      p.innerHTML = e
      this.container.appendChild(p)
    })
  },

  handleToast(error) {
    this.toast.firstElementChild.innerHTML = error
    this.toast.classList.remove('fadeout')
    this.toast.classList.remove('hide')
    this.toast.classList.add('fadein')

    setTimeout(() => {
      this.toast.classList.remove('fadein')
      this.toast.classList.add('fadeout')
      this.toast.classList.add('hide')
    }, 2000)
  },

  validateInput(event) {
    event.preventDefault()
    const inpValue = this.gatherInput()

    try {
      this.clearResult()

      if (inpValue == '') {
        throw new Error('Por favor, digite um número válido.')
      } else {
        this.printResult()
        this.inp.value = ''
      }

    } catch (error) {
      this.handleToast(error.message)
      this.inp.value = ''
    }
  }
}
