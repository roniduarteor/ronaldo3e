// Dado um array de números, crie uma função que receba esse array e retorne a soma de todos os elementos.
const numeros = [1, 2, 3, 4, 5]

// A função reducer recebe quatro parâmetros:

// Acumulador (acc)
// Valor Atual (cur)
// Index Atual (idx)
// Array original (src)

const valorInicial = 0
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, valorInicial,)
console.log(soma)