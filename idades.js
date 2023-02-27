function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')
    var nome = document.getElementById('nome')
        if (fano.value.length == 0 || fano.value > ano){
            window.alert(`[ERROR] Check the answers and try again!`)

        }else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value) 
            var genero = ''
            var img = document.createElement('img')
            var name = String(nome.value)
            img.setAttribute ('id', 'foto')
            //man
            if (fsex[0].checked){
            genero = 'Man'
                if (idade >= 0 && idade < 2){
                    //baby
                    img.setAttribute('src','fotosidades/bebemenino.png')
                
                }else if (idade <= 4){
                    //young child
                    img.setAttribute('src', 'fotosidades/youngchild.png')
                
                }else if ( idade <= 12){
                    //child
                    img.setAttribute('src', 'fotosidades/criancamenino.png')
                
                }else if(idade <= 17){
                    //adolescent
                    img.setAttribute('src', 'fotosidades/adolescentemenino.png')
                
                }else if (idade <=27){
                    //young adult
                    img.setAttribute('src', 'fotosidades/jovemgaroto.png')
                
                }else if (idade <= 49){
                    //adult
                    img.setAttribute('src', 'fotosidades/homemadulto.png')
                
                }else if(idade <=59){
                    //old man
                    img.setAttribute('src', 'fotosidades/idoso.png')

                }else if (idade<= 100){
                    //sage
                    img.setAttribute('src', 'fotosidades/sabio.png')
            
                }else{
                    img.setAttribute('src', 'fotosidades/sabio.png')
            
                }
            //woman
            } else if (fsex[1].checked){
                genero = 'Woman' 
                if (idade >= 0 && idade < 2){
                //baby
                img.setAttribute('src','fotosidades/bebemenina.png')
                
            }else if (idade <= 4){
                //young child
                img.setAttribute('src', 'fotosidades/youngchildf.png')
            
            }else if ( idade <= 12){
                //child
                img.setAttribute('src', 'fotosidades/criancamenina.png')
            
            }else if(idade <= 17){
                //adolescent
                img.setAttribute('src', 'fotosidades/adolescentemenina.png')
            
            }else if (idade <=27){
                //young adult
                img.setAttribute('src', 'fotosidades/jovemmoca.png')
            
            }else if (idade <= 49){
                //adult
                img.setAttribute('src', 'fotosidades/mulheradulta.png')
            
            }   
            else if(idade <=59){
                //old woman
                img.setAttribute('src', 'fotosidades/idosa.png')

            }else if (idade<= 100){
                //sage
                img.setAttribute('src', 'fotosidades/sabia.png')
            
            }else{
                img.setAttribute('src', 'fotosidades/sabia.png')
            
            }

        }
            res.style.textAlign = 'center'
            res.innerHTML = `${name}, you're a ${genero} with ${idade} year's old.`
            res.appendChild(img)

    }

}