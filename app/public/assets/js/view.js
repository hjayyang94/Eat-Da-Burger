$(document).ready(function() {
    console.log('is now ready');

    $(document).on("click", "#submit_burger", function(result){
        event.preventDefault();
        
        console.log('good show of '+($('#b_name').val()));
        $.post('/api/new/',{name:$('#b_name').val()})
        .then(function(result){
            window.location.href = '/'
        })
    })

    $(document).on('click', '.devour_button', function(result){
        console.log('devoured '+$('.devour_button').val());

        $.ajax({
            url: '/api/update/',
            type: 'PUT',
            data: {name: $('.devour_button').val()}
        })
        .then(function(result){
            window.location.href = '/'
        })
    })
  
});
  