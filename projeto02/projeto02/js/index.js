document.addEventListener('DOMContentLoaded', ()=>{
    const baseURL = "https://swapi.dev/api/people/"

    fetch(baseURL)
    .then((response)=>{ // o fetch retorna as informações da api
        if(!response.ok){
            throw new Error('Erro de rede! Código:' +response.status)
        }
        return response.json() // vai pegar as informações e retornar no formato json
    })

    .then((data)=>{
        renderizarPersonagens(data)
    })

    .catch((err)=>console.log(err)) // se der problema com os dados ele vai para o catch
}) // faz isso pra puxar os dados da api

function renderizarPersonagens(items){
    const container = document.getElementById("personagem-container");
    
    items.results.forEach((item, index)=>{ // do objeto de items, ele vai chamar um item individualmente

        const divPersonagens = document.createElement('div')
        divPersonagens.innerHTML = `
            <div class="personagem-caixa">
                <img src="./image/perso${index}.png">
                    <div>
                        <h3>${item.name}</h3>
                    </div>
            </div>
        `;

        divPersonagens.addEventListener('click', (index)=>{
            detalhesPersonagem(index)
        })

        divPersonagens.classList.add('personagem')
        container.appendChild(divPersonagens)

        console.log(item)
    })
}

function detalhesPersonagem(index){
    window.location.href = `./pages/person.html?index=${index}` 
    
    //parâmetro de identificação do personagem selecionado
}
