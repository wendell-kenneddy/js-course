const handleInput = {
  container: document.querySelector('#result'),

  gatherInput() {
    let inp = document.getElementById('user-name').value

    return inp
  },

  handleLastLetters(string) {
    let letters = string.map(e => `"${e}"`)
    letters = `${letters.slice(0, -1).join(", ")} e ${letters.slice(-1)}`

    return letters
  },

  handleWords(string) {
    let name = string.split(" ")
    let words = name.map(e => `"${e}"`)
    words = `${words.slice(0, -1).join(", ")} e ${words.slice(-1)}`

    return words
  },

  handleString(string) {
    // Manipulate the string
    const formattedName = string.replace(/\s/g, "")
    const totalLetters = formattedName.length
    const secondLetter = `"${formattedName[1]}"`
    const randomLetter = formattedName.charAt(Math.random() * formattedName.length)

    // + 1 to match a normal name letters indexing, not the array-like indexing
    const firstIndex = formattedName.indexOf(randomLetter) + 1
    const lastIndex = formattedName.lastIndexOf(randomLetter) + 1

    let lastThreeLetters = Array.from(formattedName.slice(-3))
    lastThreeLetters = this.handleLastLetters(lastThreeLetters)

    // Create the final output
    let output = `Seu nome completo é ${string}, tem ${totalLetters} letras, a segunda letra é ${secondLetter}, e a primeira ocorrência da letra "${randomLetter}" é ${firstIndex}, bem como sua última é ${lastIndex}. As últimas três letras são ${lastThreeLetters}. Os nomes em seu nome completo são ${this.handleWords(string)}. Seu nome com letras maiúsculas: ${string.toUpperCase()}, e com letras minúsculas: ${string.toLowerCase()}.`

    return output
  },

  cleanInput() {
    document.getElementById('user-name').value = ''
  },

  printResult() {
    this.container.innerHTML = ''
    let content = this.handleString(this.gatherInput())
    this.container.innerHTML = content
    this.cleanInput()
  },


}
