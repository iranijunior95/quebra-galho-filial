const inputUsuario = document.querySelector('#inputUsuario');
const inputSenha = document.querySelector('#inputSenha');
const formContent = document.querySelectorAll('.form-content');

document.querySelector('#btnEntrar').addEventListener('click', async () => {

    if(validaInputs(inputUsuario.value, 'Campo usuário não pode ser vazio...', 0) & validaInputs(inputSenha.value, 'Campo senha não pode ser vazio...', 1)) {
        const retorno = await logar();
        console.log(retorno.status);
    }else {
        return false;
    }
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

async function logar() {
    const dados = {
        usuario: inputUsuario.value,
        senha: inputSenha.value
    };
    
    return await fetch('http://localhost:3000/api/v1/logar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(res => res)
    .catch(error => console.log('erro: '+error));
}