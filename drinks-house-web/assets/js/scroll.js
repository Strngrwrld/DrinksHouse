/**ESTE ARCHIVO JS TIENE COMO FINALIDAD, DETECTAR LOS MOVIMIENTOS DE LA PAGINA PARA REALIZAR LOS EFECTOS DE SCROLL*/
$('document').ready(function() {

    $(window).on('scroll', function() {

        var OffsetTop = $('#drinks').offset().top;
        var scroll = $(window).scrollTop();

        if (scroll >= OffsetTop / 2) {

            $('#nav').css('background-color', '#000000');
        } else if (scroll <= 0) {

            $('#nav').css('background-color', 'transparent');

        }
    });


    //Movimiento suave de scroll Inicio y Volver Arriba
    $('h1.volver-arriba').on('click', function(e) {
        e.preventDefault();

        if ($(window).scrollTop != 0) {
            $('html, body').stop().animate({
                scrollTop: 0
            }, 1000);
        }

    });

    $('a.scroll-suave').on('click', function(e) {
        e.preventDefault();

        var seccionOT = $($(this).attr('href')).offset().top

        $('html, body').stop().animate({
            scrollTop: seccionOT - 125
        }, 1000)
    });
});