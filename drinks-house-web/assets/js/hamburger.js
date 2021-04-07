$('document').ready(function() {


    var hamburger = document.querySelector('#hamburger button')

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('open');
        $('#filter_movil').toggleClass('visibility');
    });

    $('#search_button_movil').click(function() {
        hamburger.classList.toggle('open');
        $('#filter_movil').toggleClass('visibility');
    })

})