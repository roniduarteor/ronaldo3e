function calcular(){
    let altura = window.document.getElementById("altura").value
    let peso = window.document.getElementById("peso").value
    let IMC = peso / (altura * altura)
    
    if(IMC <= 16.9){
        document.getElementById("resultado").innerHTML = `${IMC} Muito abaixo do peso` 
    }
    else if(IMC >= 17 && IMC <= 18.4){
        document.getElementById("resultado").innerHTML = `${IMC} Abaixo do peso` 
    }
    else if(IMC >= 18 && IMC <= 24.9){
        document.getElementById("resultado").innerHTML = `${IMC} Peso normal` 
    }
    else if(IMC >= 25 && IMC <= 29.9){
        document.getElementById("resultado").innerHTML = `${IMC} acima do peso` 
    }
    else if(IMC >= 30 && IMC <= 34.9){
        document.getElementById("resultado").innerHTML = `${IMC} Obesidade grau I` 
    }
    else if(IMC >= 35 && IMC <= 40){
        document.getElementById("resultado").innerHTML = `${IMC} Obesidade grau II` 
    }
    else if(IMC > 40){
        document.getElementById("resultado").innerHTML = `${IMC} Obesidade grau III`
    }
    
}
