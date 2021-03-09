const Storage = {
  get() {
    return JSON.parse(localStorage.getItem('user: signed')) || {
      signed: false,
      username: null
    }
  },

  set(item) {
    localStorage.setItem('user: signed', JSON.stringify(item))
  }
}

const User = Storage.get()

const Form = {
  username: document.querySelector('input#username'),

  getUserData() {
    return {
      username: this.username.value
    }
  },

  clearFields() {
    this.username.value = ''

    App.init()
  },

  validateFields() {
    const { username } = this.getUserData();

    if (username.replace(/\s/g, "") == '') throw new Error('Por favor, digite seu nome.')
  },

  updateUser() {
    const { username } = this.getUserData()
    User.signed = true
    User.username = username
  },

  submit(event) {
    event.preventDefault()

    try {
      this.validateFields()
      this.updateUser()
      this.clearFields()
    } catch (error) {
      alert(error.message)
    }
  }
}

const handleDom = {
  container: document.querySelector('main.container'),
  header: document.querySelector('header#page-header'),

  handleClock() {
    const now = new Date()
    const p = document.querySelector('#page-header p')
    let output = 'Hoje é ' + now.toLocaleString('pt-br', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }) + ' às ' + now.toLocaleString('pt-br', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    p.innerHTML = output
  },

  changeVisibility() {
    this.container.classList.add('hide')
    this.header.classList.remove('hide')
  },

  updateHeaderH1() {
    const h1 = document.querySelector('header#page-header h1')
    h1.innerHTML = `Olá, ${User.username}`
  },

  updateHeaderP() {
    setInterval(this.handleClock, 1000)
  }
}

const App = {
  checkUser() {
    if (User.signed) {
      handleDom.changeVisibility()
      handleDom.updateHeaderH1()
      handleDom.updateHeaderP()
    }
  },

  init() {
    Storage.set(User)

    this.checkUser()
  }
}

App.init()
