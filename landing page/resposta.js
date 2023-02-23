
let nome = window.document.getElementById('nome')
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

// let imported = document.createElement('landingpage.js')



    if(window.confirm('Seus dados foram salvos no sistema')){
    resposta.innerHTML += `<h2>Seus dados </h2>
    <br>
    <p>Nome: ${nome}</p>
    <p>sobrenome: ${sobrenome}</p>
    <p>Data de Nascimento: ${data}</p>
    <p>Telefone: ${tel}</p>
    <p>Whatsapp: ${whats}</p>
    <p>Endereço: ${end}</p>
    <p>Email: ${email}</p>
    <p>Sexo: ${sexo}</p>
    <p>Instrumentos: ${instrumento}</p>
    <p>Possui o instrumento? ${temIns}</p>
    <p>Experiencia: ${exp}</p>
    `
}
    