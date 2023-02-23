function carregar (){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
// var hora = 10

    msg.innerHTML = `Agora são ${hora} horas`
 if(hora >= 0 && hora < 12){
    //BOM DIA!!
    img.src= 'fotos/manha.png'
    document.body.style.background = ' #ca6a4888'

 }else if (hora >=12 && hora <18){
    //BOA TARDE!!
    img.src = 'fotos/tarde.png'
    document.body.style.background = '#b3c2cf88'

 }else{
    //BOA NOITE!
    img.src = 'fotos/noite.png'
    document.body.style.background = '#40325088'
 }
}