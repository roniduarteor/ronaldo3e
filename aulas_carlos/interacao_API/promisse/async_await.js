// async function calculaComDelay(x, y){
//     return x * y
// }

// calculaComDelay(3,3)
// .then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(`${err}`)
// })

function respostaComDelay(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Resolveu a promessa')
        }, 3000)
    })
}

async function chamadaDelay(){
    console.log('Chamando a promisse, e esperando o resultado')
    const resultado = await respostaComDelay()
    console.log(`O resultado chegou ${resultado}`)
}

chamadaDelay()