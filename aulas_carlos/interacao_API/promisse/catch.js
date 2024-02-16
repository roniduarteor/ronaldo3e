// const promessa = Promise.resolve('Olá,' * 4)
// .then((value)=>{
//     if(Number.isNaN(value)){
//         throw new Error('Valores inválidos')
//     }
// }).catch((err)=>{
//     console.log(`Um erro ocorreu ${err}`)
// })

function checkNumber(n){
    return new Promise((resolve, reject)=>{
        if(n > 20){
            resolve('O número é maior que 20')
        }else{
            reject(new Error('Número inválido'))
        }
    })
}

const num1 = checkNumber(25)
const num2 = checkNumber(10)

num1.then((value)=>{
    console.log(`O resultado é: ${value}`)
}).catch((err)=>{
    console.log(`Error: ${err}`)
})


num2.then((value)=>{
    console.log(`O resultado é: ${value}`)
}).catch((err)=>{
    console.log(`${err}`)
})

console.log('Teste Async')