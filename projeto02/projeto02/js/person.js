document.addEventListener('DOMContentLoaded', ()=>{
     const urlParam = new URLSearchParams(window.location.search)
     // console.log(urlParam.get('index'))

     const paramIndex = urlParam.get('index')
     // console.log(paramIndex)  // valor do index do parâmetro

     const url = `https://swapi.dev/api/people/${paramIndex+ 1}/`
     
     console.log(url)
     console.log(urlParam)
     console.log(paramIndex)

     fetch(url)
     .then((response)=>{
          if(!response.ok){
               throw new Error('Erro de rede: Código' +response.status)
          }
          return response.json
     })
     .then((data)=>{
          personagem(data)
     })
     .catch((err)=> console.log(err))


     function personagem(item){
          const personagemImg = document.querySelector('.personagem-img')
          const nome = document.querySelector('.nome')
          const altura = document.querySelector('.altura')
          const peso = document.querySelector('.peso')
          const genero = document.querySelector('.genero')
          const cor_cabelo = document.querySelector('.cor_cabelo')
          const cor_olho = document.querySelector('.cor_olho')
          const cor_pele = document.querySelector('.cor_pele')
          const data_nascimento = document.querySelector('.data_nascimento')

          personagemImg.src = `../image/perso${paramIndex}.png`
          nome.innerHTML = `Nome: ${item.name}`
          altura.innerHTML = `Altura: ${item.height}cm`
          peso.innerHTML = `Peso: ${item.mass}`
          genero.innerHTML = `Gênero: ${item.gender}`
          cor_cabelo.innerHTML = `Cor do cabelo: ${item.hair_color}`
          cor_olho.innerHTML = `Cor do olhos: ${item.eye_color}`
          cor_pele.innerHTML = `Cor da pele: ${item.skin_color}`
          data_nascimento.innerHTML = `Data Aniversário: ${item.birth.year}`
     }
})
