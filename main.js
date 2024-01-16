const form = document.getElementById('promocao');
let formEValido = false;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const numeroTelefone = document.getElementById('numero-telefone').value;
    const idade = document.getElementById('idade').value;
    const nomeCompleto = document.getElementById('Nome-Completo').value;

    const mensagemSucesso = `Candidato: <b>${nomeCompleto}</b>, Telefone: <b>${numeroTelefone}</b>, Idade: <b>${idade}</b> registrado`;

    function validaTelefone(numeroTelefone, idade) {
        if (numeroTelefone > idade) {
            return '.success-message';
        } else {
            return '.error-message';
        }
    }

    formEValido = validaTelefone(numeroTelefone, idade);

    if (formEValido === '.success-message') {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        document.getElementById('numero-telefone').style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});


