
const frutas =["maça", "banana", "laranja", "uva", "limão", "abacaxi"] // acessando elemento de um array pelo indice 
console.log(frutas) // basico de um arrays

console.log(frutas[3]) // acessando elemento de um array pelo indice 

frutas.push("abacate")
console.log(frutas) // push vai adicionar um novo elemento no final do array
console.log(frutas[6])

frutas.unshift("morango")
console.log(frutas)
console.log(frutas[0]) // unshift adicoonar um novo elemento no inicio do array

frutas.shift()
console.log(frutas)  // shift remove o primeiro elemento do array

frutas.pop()
console.log(frutas) // o pop remove o ultimo elemento do array