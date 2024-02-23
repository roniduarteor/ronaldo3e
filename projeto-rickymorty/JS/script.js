//   "characters": "https://rickandmortyapi.com/api/character",
//   "locations": "https://rickandmortyapi.com/api/location",
//   "episodes": "https://rickandmortyapi.com/api/episode"

const page = 1
const baseUrl = 'https://rickandmortyapi.com/api'

const loadCharacter = async ()=>{ // ja q essa função vai fazer uma requisição HTTP, ela precisa ser assincrona (async)
    const res = await fetch(`${baseUrl}/character?page=${page}`)
    const data = await res.json()
    const limitData = data.results.slice(0,9)
    
    return {results: limitData}
}

const loadLocation = async ()=>{
    const res = await fetch(`${baseUrl}/location`)
    return await res.json()
}

const loadEpisode = async ()=>{
    const res = await fetch(`${baseUrl}/episode`)
    return await res.json()
}


const loadAllWithPromiseAll = async ()=>{
    const [character, location, episode] = await Promise.all([
        loadCharacter(),
        loadLocation(),
        loadEpisode()
    ])
    showCharacter(character.results) // results pra mostrar só os dados especificos daquela api (nesse caso os personagens)
    showCharacter(location.results)
    console.log("Episode: ",episode.results)
}

loadAllWithPromiseAll()

function showCharacter(characters){
    const characterContainer = document.getElementById('character-container');
    characters.map((character)=>{
        const divCharacter = document.createElement('div')
        divCharacter.innerHTML = `
            <img src="${character.image}" alt="Imagem do personagem">
            <article class="character-info">
                <h3>${character.name}</h3>
                <span class="status"><div></div>${character.status} - ${character.species}</span>
                
                <div class="lastLocation">
                <span class="lastLocationText">Last know location:</span>

                    <div class="location-box">
                        <a href="${character.location.url}">${character.location.name}</a>
                    </div>
                </div>
                
                <div class="origin">
                <span class="firstSee">First seen in:</span>
                <a href="${character.origin.url}">${character.origin.name}</a>
                </div>

            </article>
            `;
            console.log(character.status)
            divCharacter.classList.add('character-box')
        characterContainer.appendChild(divCharacter) // tudo isso pra fazer aparecer as informações no HTML
    })

}
