// Crie duas funções, uma que dobre um número e outra que triplique um número. 
// Em seguida, crie uma terceira função que utilize essas duas funções para calcular a soma do dobro e do triplo de um número.

let numero = 2

function dobrar(numero){
    let dobro
    dobro = numero * 2
    return dobro
}
function triplicar(numero){
    let triplo
    triplo = numero * 3
    return triplo
}

function soma(numero){
    let soma
    soma = dobrar(numero) + triplicar(numero)
    return soma
}

console.log(dobrar(numero))
console.log(triplicar(numero))
console.log(soma(numero))

// outro jeito

const dobro2 = (x) => 2 * x
const triplo2 = (x) => 3 * x

const resultado =  function(param, fun1, fun2){
    const dobro = fun1(param)
    const triplo = fun2(param)
    console.log(`O número ${param}, dobro ${dobro}, triplo ${triplo}`)
}

resultado(2, dobro2, triplo2)