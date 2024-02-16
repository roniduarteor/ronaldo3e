// atividade 04

// Dado um array de objetos que representam produtos:
    let produtos = [
      { nome: 'Camiseta', preco: 20 },
      { nome: 'Celular', preco: 500 },
      { nome: 'Caneca', preco: 10 }
    ];
// Crie uma função que recebe um preço mínimo como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é igual ou superior ao preço mínimo.

function precoMinimo(arrayProduto, valorMinimo){
    return arrayProduto.filter((produto)=> produto.preco >= valorMinimo)
}

const produtoAcimaDoMinimo = precoMinimo(produtos, 500)
console.log(produtoAcimaDoMinimo)