// Exemplo 01
// function soma(a,b){  // os parâmetros "A e B funcionam como argumentos para a função funcionar"
//     const soma = a + b 
//     if(soma > 5){
//         console.log(`Valor não permitido ${soma}`)
//     }else{
//         return soma
//     }

// }

// console.log(soma(2,2)) // Deu certo
// console.log(soma(2)) // NaN
// console.log(soma()) // NaN
// console.log(soma(2,2,2,2,2,2,3,4,5,6)) // pega somente os 2 primeiros
// soma(2,5) // tira o console já que vai retornar o que já esta dentro da função, e vai eliminar o q ta de fora dela


// Exemplo 02
// function multiplicacao(){
//     let multi = 1
//     for(i in arguments){
//         multi *= arguments[i]
//     }
//     return multi
// }

// console.log(multiplicacao())
// console.log(multiplicacao(5))
// console.log(multiplicacao(5,5))


// Exemplo 03
// function triplo(x){
//     return 3 * x
// }

// let triplo = function(x){ // função oculta
//     return 3 * x
// }

// triplo = (x) => { // arrow function
//     return 3 * x
// }

// triplo = (x) => 3 * x;
// console.log(triplo(3) + 3)

// oi = (nome) => `Oi`;
// console.log(oi())

// oi = _ => `Oi`;
// console.log(oi())

const soma = function(x,y){
    return x + y
}

const resultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

resultado(5,5) 
resultado(5,5, soma) 
resultado(5,5, function(x,y){
    return x * y
}) 
resultado(3, 3, (x,y)=> x / y)