// window.alert() exibe um alerta no navegador, com a mensagem passada como argumento para a função.
// window.prompt() exibe um prompt no navegador, onde o usuário pode dar algum valor.
// window.confirm() exibe um promtp de sim/não, que retorna true ou false dependendo da resposta do usuário.
// Todos os métodos acima não podem ser executados no node.js, visto que dependem da API do navegador para funcionar.

const firstNum = Number(
  window.prompt('Digite um número').trim().replace(/\D/g, "")
)
const secondNum = Number(
  window.prompt('Digite outro número').trim().replace(/\D/g, "")
)

const result = window.alert(`A soma dos dois números digitados é igual a ${firstNum + secondNum}`)