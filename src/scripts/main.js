document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const numero = document.getElementById('tel').value;
        const resultado = numero.replace(/\D/g, '');
        
        if (resultado.length === 11) {
            const telefone = `(${resultado.substring(0, 2)}) ${resultado.substring(2, 7)}-${resultado.substring(7)}`;

            document.getElementById('name').innerText = nome;
            document.getElementById('phone').innerText = telefone;
        } else {
            alert(`Número Inválido. Por favor, insira o DDD e o número completo com 11 dígitos.`);
        }
    })
})
