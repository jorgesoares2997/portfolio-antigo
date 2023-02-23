function entregar(){
    let nome = document.getElementById('nome')
    let sobrenome = document.getElementById('sobrenome')
    let data = document.getElementById('data')
    let tel = document.getElementById('tel')
    let whats = document.getElementById('whats')
    let end = document.getElementById('end')
    let email = document.getElementById('email')
    let sexo = document.getElementsByName('sex')
    let instrumento = document.getElementsByName('ins')
    let temIns = document.getElementsByName('temins')
    let exp = document.getElementsByName('exp')
    let resposta = document.getElementById('resposta')
    
    if (nome.value.length == 0){
        window.alert('Campo de Nome está vazio')
    }else if (sobrenome.value.length == 0){
        window.alert('Campo de Sobrenome está vazio')
    }else if (data.value.length == 0){
        window.alert('Campo de data de nascimento está vazio')
    
    }else if (whats.value.length == 0){
        window.alert('Campo de whatsapp está vazio')
    
   
    
     }
     if(window.confirm('Deseja entregar o formulario?')){

        window.open("resposta.html")
        }
    }
    

  
