// criando uma data

const dataAtual = new Date()
dataAtual.setDate(dataAtual.getDate () + 7)
console.log(dataAtual.getDate()) // mostra o dia do mes
console.log(dataAtual.getDay()) // dia da semana contando a partir de segunda
console.log(dataAtual.getMonth()) 
console.log(dataAtual.getHours(), ":" , dataAtual.getMinutes()) 