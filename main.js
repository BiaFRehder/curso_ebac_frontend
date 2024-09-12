$(document).ready(function(){
    let lista = [];
    
    $('form').on('submit', function(e){
        e.preventDefault();
        
        const newTask = $('#nova-tarefa').val();
        const newItem = $(`<li style="display: none">${newTask}</li>`).appendTo('ul');

        $(newItem).fadeIn(1000);        
        $('#nova-tarefa').val('');
        
        lista.push(newTask);
    })
    
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('done');

        let feito = $('.done');
        if (lista.length == feito.length){
            alert('Todas as tarefas foram concluidas com sucesso!')
        }
    })

    $('form').on('reset', function(){
        $('li').remove();
    })
})

