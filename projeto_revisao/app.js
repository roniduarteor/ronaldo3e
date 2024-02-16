const inNumero = document.getElementById('inNumero')
const outTabuada = document.getElementById('outTabuada')

const btnMostrar = document.getElementById('btnMostrar')

btnMostrar.addEventListener('click', ()=>{
    let numero = Number(inNumero.value)

    if(numero === 0 || isNaN(numero)){
        alert("Digite um número válido")
        inNumero.focus()
        return
    }
    let resposta = ''
    for(let i = 1; i <= 10; i++){
        resposta = `${resposta + numero} x ${i} = ${numero*i} `
    }
    outTabuada.innerHTML = `${resposta}`
})