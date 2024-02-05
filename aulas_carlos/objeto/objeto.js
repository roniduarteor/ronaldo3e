let pessoa = { // objeto sempre será chave e valor
    nome: 'Roni', // sempre separar com virgula
    idade: 17,
    enderecos: [
        {
            tipo: 'Residencial',
            rua: 'Rua A',
            cidade: 'Maceió',
        },
        {
            tipo: 'Comercial',
            rua: 'Rua B',
            cidade: 'Xique-Xique',
        }
    ],
    saudacao(){
        return `Olá, Mundo`
    }
}

// console.log(pessoa.nome) // se quiser ver as propriedades q existem dentro do objeto usa o "."
// console.log(pessoa.saudacao())
// console.log(pessoa.enderecos[0].rua)

const enderecos = pessoa.enderecos.map((elementos)=> elementos)
console.log(enderecos)

// outro jeito

pessoa.enderecos.forEach((elementos, indice)=>{ console.log(`${indice + 1} - ${elementos.cidade}`)})