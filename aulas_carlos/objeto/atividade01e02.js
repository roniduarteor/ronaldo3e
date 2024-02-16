// ativiade 01

// - Dado dois arrays de objetos que representam produtos e preços:
    
    let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
    let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
    
// - Crie um novo array de objetos que combine as propriedades de ambos, resultando em objetos que contêm o nome, categoria e preço de cada produto.

// const produtos2 = produtos.concat(precos)
// // console.log(produtos2)

// const listaProdutos = produtos2.filter((elemento)=> console.log(elemento.nome, elemento.categoria, elemento.preco))
// console.log(listaProdutos)


function combinarProdutosComPreco(produtos, precos){
    // Encontrar o objeto correspondente do array de preços
    return produtos.map((produto)=>{
        let precoProduto = precos.find((preco)=> preco.nome === produto.nome)
        return{
            nome: produto.nome,
            categoria: produto.categoria,
            preco: precoProduto.preco,
        }
    })

}

combinarProdutosComPreco(produtos, precos)
let combinaProduto = combinarProdutosComPreco(produtos, precos)
console.log(combinaProduto)


// atividade 02

function buscarPorCategoria(arrayDeProduto, categoria){
    return arrayDeProduto.filter((produto)=> produto.categoria === categoria)
}
const categoriaProduto = buscarPorCategoria(combinaProduto, "Eletrônicos")
console.log(categoriaProduto)