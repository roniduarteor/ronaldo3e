const promessa = Promise.resolve(5 + 5)
console.log(`Lógica que foi desenvolvida`)


promessa.then(function(value){
    console.log(`A soma ${value}`)
    return value

}).then(function(value){
    console.log(`A subtração -1 = ${value - 1}`)
    return value
}).then(function(value){
    console.log(`Multiplicação ${value * 2}`)
})

console.log('Código Extra')