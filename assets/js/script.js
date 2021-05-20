/*
    Acessar o DOM através de:
    
    • Tag: getElementByTagName()
    • Id: getElementById()
    • Nome: getElementsByName()
    • Classe: getElementsByClassName()
    • Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')   // O 'window' pode ser omitido
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txt.innerHTML = "Nome inválido"
        txt.style.color = "red"
    } else {
        txt.innerHTML = "Nome válido"
        txt.style.color = "green"
        nomeOK = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "O texto é muito grande. Digite, no máximo, 100 caracteres."
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOK == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado")
    } else {
        alert("Por favor, preencha o formulário corretamente antes de enviá-lo")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "300px"
}