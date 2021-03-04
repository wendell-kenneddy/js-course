const handleModal = {
  modal: document.querySelector('div.modal-overlay'),
  isEdit: false,

  open() {
    this.isEdit = false
    this.modal.classList.remove('hide')
  },

  close() {
    handleForm.clearFields()
    this.modal.classList.add('hide')
  },

  openEdit() {
    this.open()
    this.isEdit = true
  }
}

const Storage = {
  get() {
    return JSON.parse(localStorage.getItem('identifier: persons')) || []
  },

  set(persons) {
    localStorage.setItem('identifier: persons', JSON.stringify(persons))
  }
}

const handlePersons = {
  personList: Storage.get(),
  underEditionIndex: null,

  add(person) {
    this.personList.push(person)

    App.reload()
  },

  remove(index) {
    this.personList.splice(index, 1)

    App.reload()
  },

  saveEdit(person, index) {
    this.personList[index] = person

    App.reload()
  }
}

const handleTable = {
  container: document.querySelector('#persons-table tbody'),

  addPerson(person, index) {
    const createRow = document.createElement('tr')
    createRow.innerHTML = this.createHTML(person, index)
    createRow.dataset.index = index
    this.container.appendChild(createRow)
  },

  createHTML(person, index) {
    const html =
      `
      <td>${person.name}</td>
      <td>${person.nick}</td>
      <td>${person.weight}</td>
      <td>${person.height}</td>
      <td><img src="./assets/x-circle.svg" alt="Remover registro" width="32" height="32" onclick="handlePersons.remove(${index})"></td>
      <td><img src="./assets/edit-icon.svg" alt="Editar registro" width="32" height="32" onclick="handleTable.editRegister(${index})"></td>
     `
    return html
  },

  editRegister(index) {
    handleModal.openEdit()

    document.querySelector('input#name').value = handlePersons.personList[index].name
    document.querySelector('input#nickname').value = handlePersons.personList[index].nick
    document.querySelector('input#weight').value = handleForm.reformatData(handlePersons.personList[index].weight)
    document.querySelector('input#height').value = handleForm.reformatData(handlePersons.personList[index].height)

    handlePersons.underEditionIndex = index
  },

  clearTable() {
    this.container.innerHTML = ''
  }
}

const handleForm = {
  name: document.querySelector('input#name'),
  nick: document.querySelector('input#nickname'),
  weight: document.querySelector('input#weight'),
  height: document.querySelector('input#height'),

  getInputData() {
    return {
      name: this.name.value,
      nick: this.nick.value,
      weight: this.weight.value,
      height: this.height.value
    }
  },

  formatData() {
    let { name, nick, weight, height } = this.getInputData()
    weight = `${weight}kg`
    height = `${height}m`

    return {
      name,
      nick,
      weight,
      height
    }
  },

  reformatData(value) {
    return Number(value.replace(/[A-Za-z ]/g, ""))
  },

  clearFields() {
    this.name.value = ''
    this.nick.value = ''
    this.weight.value = ''
    this.height.value = ''
  },

  validateFields() {
    if (this.name.value == '' ||
      this.nick.value == '' ||
      this.weight.value == '' ||
      this.height.value == ''
    ) {
      throw new Error('Por favor, preencha todos os campos')
    }
  },

  submit(event) {
    event.preventDefault()

    try {
      this.validateFields()

      const person = this.formatData()

      handleModal.isEdit
        ? handlePersons.saveEdit(person, handlePersons.underEditionIndex)
        : handlePersons.add(person)

      handleModal.close()
    }

    catch (error) {
      alert(error.message)
    }
  }

}

const App = {
  init() {
    handlePersons.personList.forEach((e, i) => handleTable.addPerson(e, i))

    Storage.set(handlePersons.personList)
  },

  reload() {
    handleTable.clearTable()
    this.init()
  }
}

App.init()