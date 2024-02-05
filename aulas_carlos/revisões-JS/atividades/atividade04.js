// Crie duas funções, uma que dobre um número e outra que triplique um número. Em seguida, crie uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número.
const numeros = [1, 2, 3, 4, 5]

const dobro = numeros.map((numero)=> {return numero*2})
const triplo = numeros.map((numero)=> {return numero*3})

console.log(dobro)
console.log(triplo)