$(document).ready(function(){

    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: true
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) *****-****'
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '***.***.***-**'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '*****-***'
    })
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })

    $('#carousel-imagens button').click(function(){
        const destino = $('.container');
        
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})