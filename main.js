const form = document.getElementById('form-num');
let primeiro = document.getElementById('campoA');
let segundo = document.getElementById('campoB');

const sucesso = document.querySelector('.success'); 
const erro = document.querySelector('.error');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const mensagemSuccess = `O ${primeiro.value} é menor que o ${segundo.value}. Seu formulário foi enviado com sucesso.`
    ///const mensagemError = `O ${primeiro.value} não é menor que o ${segundo.value}. Digite novamente.`

    if (primeiro.value < segundo.value){
        sucesso.innerHTML = mensagemSuccess;
        sucesso.style.display = 'block';

        ///console.log(mensagemSuccess);
    } else {
        erro.style.display = 'block';

        ///console.log(mensagemError);
    }
})

let recarregar = document.querySelector('.link');
recarregar.addEventListener('click', recarregarPagina);

function recarregarPagina(recarregar) {
    window.location.reload();
}

let resetar = document.querySelector('.resetar');
resetar.addEventListener('click', resetarValores);

function resetarValores(resetar) {
    sucesso.style.display = 'none';
    erro.style.display = 'none';
}
