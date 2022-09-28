//const perfil = document.getElementById('perfil');pegra o elemento que tem o id perfil
//const perfil = document.getElementsByClassName('perfil');pega pelo nome da getElementsByClassName
//const perfil = document.getElementsByName('name')pega pelo nome

let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let mensagem = document.getElementById('#mensagem');

nome.style.width = '100%';
email.style.width = '100%';


function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome Invalido.'
    txtNome.style.color = "red"
    } else {
        txtNome.innerHTMld = 'Nome válido.'
        txtNome.style.color = 'green'
        
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
    txtEmail.innerHTML = 'Email válido.'
    txtEmail.style.color = 'green' 
    }

}

function validaMensagem() {
    let txtMsg = document.querySelector('#txtMsg')

    if(mensagem.value.lenght >= 100) {
        txtMsg.innerHTML = 'Menagem grande demais, digite no máximo 100 caracteres.'
        txtMsg.style.color = 'red'
        txtMsg.style.display = 'none'

    } else {
       txtMsg.style.display = 'none'
    }
}
