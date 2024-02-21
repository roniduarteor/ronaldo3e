const data = [
    
        {
          "id": 1,
          "usuario": "carlos",
          "senha": "123456"
        },
        {
          "id": 2,
          "usuario": "igor",
          "senha": "654321"
        },
        {
          "id": 3,
          "usuario": "leticia",
          "senha": "123654"
        }
      
]

console.log(data)

const btn = document.querySelector('#login')
//O event é importante, pois em formularios, o html mostra o que vc quer, mas depois atualiza e some
//O event permite permanecer com essas informaçõs
//Utiliza dessa forma que foi mostrada
btn.addEventListener('click', (event)=>{
    event.preventDefault()
    const user  = document.getElementById('user').value
    const passaword = document.getElementById('password').value

    const login = data.find((objeto) => objeto.usuario === user && objeto.senha === passaword)

    if(login){
        window.location = '../index.html'
    }else{
        alert('usuario não encontrado')
    }
    
})         
