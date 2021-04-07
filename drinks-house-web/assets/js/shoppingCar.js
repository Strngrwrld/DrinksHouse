//FUNCIONALIDAD DE JS ES REALIZAR UN EFECTO OVERLAY
$('document').ready(function() {

    //VALIDANDO PRODUCTOS DE CARRITO
    if (parseInt(sessionStorage.getItem('cantidad_productos')) > 0) {
        $('#shopping_cant_text').text(sessionStorage.getItem('cantidad_productos'))
        $('#shopping_message').toggleClass('invisibility');

        $('#shopping_cant_text').toggleClass('visibility');
    }


    $('body').on('click', 'article .add_shopping', function() {

        $('#shopping_cant_text').text(sessionStorage.getItem('cantidad_productos'))

        sessionStorage.setItem('cantidad_productos', (parseInt(sessionStorage.getItem('cantidad_productos')) + 1))
    })


});


$('#shopping_card').click(function() {

    if (parseInt(sessionStorage.getItem('cantidad_productos')) == 0) {
        $('#shopping_message').toggleClass('invisibility');
        return
    }

});


$('#shopping_card').click(function() {

    if ($('#shopping_cant_text').text() == "") {
        return
    }

});