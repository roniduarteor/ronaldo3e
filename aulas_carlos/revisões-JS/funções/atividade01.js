// Faça uma função que receba um único valor. Essa função deverá retornar 1 se o número digitado for positivo ou 0 se o número digitado for negativo

function unicoValor(x){
    if(x >= 0){
        return 1
    }else{
        return 0
    }
}
console.log(unicoValor(-5))
console.log(unicoValor(5))

// valor ? verdadeira : falso
const verifica = (x) => x > 0 ? 1 : 0
console.log(verifica(5))