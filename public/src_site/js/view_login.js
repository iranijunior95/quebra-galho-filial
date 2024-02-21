const inputUsuario = document.querySelector('#inputUsuario');
const inputSenha = document.querySelector('#inputSenha');
const formContent = document.querySelectorAll('.form-content');

document.querySelector('#btnEntrar').addEventListener('click', () => {

    if(validaInputs(inputUsuario.value, 'Campo usuário não pode ser vazio...', 0) & validaInputs(inputSenha.value, 'Campo senha não pode ser vazio...', 1)) {

        console.log('vai logar');
        return true;
    }

    return false;
});

function validaInputs(input, mensagem, posicao) {
    
    if(input === '') {
        
        formContent[posicao].classList.add('error');
        formContent[posicao].children[2].innerHTML = mensagem;
        return false;
    }

    formContent[posicao].classList.remove('error');
    return true;
}