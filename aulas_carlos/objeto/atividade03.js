// Dados um array de objetos que representam produtos e um array que representa as quantidades compradas de cada produto:
    
    
    let produtos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
    let quantidades = [3, 1];
    
    
// Crie uma função que calcule o preço total da compra, considerando as quantidades compradas de cada produto.

function precoTotal(produtos, quantidades){
    return produtos.map((produto, index)=> {
        let precoTotal = produto.preco * quantidades[index]

        return{
            nome: produto.nome,
            preco: produto.preco,
            ValorTotal: precoTotal,
        }
    })
}

const resultado = precoTotal(produtos, quantidades)
console.log(resultado)