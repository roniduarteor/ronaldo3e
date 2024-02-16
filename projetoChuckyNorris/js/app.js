document.addEventListener('DOMContentLoaded', ()=>{
    
    const url = "https://api.chucknorris.io/jokes/categories"

    fetch(url) // função para consumir uma API, função q é uma promessa
    .then((response)=>{
        if(!response.ok){ // se for diferente do .ok, faz algo
            throw new Error('Erro ao receber os dados')
        }
        return response.json()
    })
    .then((data)=>{
        gerarCategorias(data)
    })
    .catch((err)=>console.error(err))

})

function gerarCategorias(categorias){
    //parâmetro categorias = arrray de categorias
    //console.log(categorias)

    const select = document.getElementById('select')
    categorias.map((categoria)=>{
        const options = document.createElement('option') // criando um elemento html
        options.innerHTML = `${categoria}`
        options.value = categoria
        select .appendChild(options)
    })
}

const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    const select = document.getElementById("select").value;
    console.log(select)

    const url = `https://api.chucknorris.io/jokes/random?category=${select}`

    fetch(url)
    .then((response)=>{
        if(!response.ok){ // se for diferente do .ok, faz algo
            throw new Error('Erro ao selecionar uma piada')
        }
        return response.json()
    })
    .then((data)=>{
        gerarPiada(data)
    })
    .catch((err)=> console.error(err))
})

function gerarPiada(piada){
    const joke = document.getElementById('joke')
    joke.innerHTML = piada.value
}