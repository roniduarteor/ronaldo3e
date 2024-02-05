const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]

// LISTAR
// forEach

// array.forEach((elemento, indice) => {   console.log(`${indice} - ${elemento}`)  }) //função q recebe outra função como parametro, que são as de callback
//                         // geralmente usadas as arrow functions

// const listarDados = (elemento) => console.log(elemento)
// array.forEach(listarDados)


// Método MAP
// array.map((elemento) => {   console.log(elemento * 3)   })  // lista os dados do array, cria um novo array e modifica eles, preservando o array original


// ENCONTRAR DADOS
const maiorQue30 = array.find((elemento) => {return elemento > 30}) // dps de encontrar o numero maior que 30 ele para de executar
console.log(maiorQue30)

const maiorQue31 = array.filter((elemento)=>{   return elemento > 31    }) // lista todos os elementos daquela categoria
console.log(maiorQue31)