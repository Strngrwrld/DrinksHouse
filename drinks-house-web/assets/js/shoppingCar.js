//FUNCIONALIDAD DE JS CARRO DE COMPRAS
$('document').ready(function() {

    //INICIALIZA SESSION STORAGE DE CARRITO
    sessionStorage.setItem('cantidad_productos', 0)


    $('body').on('click', 'article .add_shopping', function() {


        sessionStorage.setItem('cantidad_productos', (parseInt(sessionStorage.getItem('cantidad_productos')) + 1))
		
        $('#shopping_cant_text').text(sessionStorage.getItem('cantidad_productos'))

        //VALIDANDO PRODUCTOS DE CARRITO
        if (parseInt(sessionStorage.getItem('cantidad_productos')) > 0) {

            $('#shopping_message').addClass('invisibility');

            $('#shopping_cant_text').addClass('visibility');
        }


    })


});


$('#shopping_card').click(function() {

    if (parseInt(sessionStorage.getItem('cantidad_productos')) == 0) {
        $('#shopping_message').toggleClass('invisibility');
        return
    }

});