$('document').ready(function() {

    //Mostrar y ocultar btn volver arriba
    //var volverArriba = $('#btnVolverArriba');

    $(window).on('scroll', function() {

        var OffsetTop = $('#filter').offset().top;
        var scroll = $(window).scrollTop();

        if (scroll >= OffsetTop / 2) {

            $('#nav').css('background-color', '#00171F');
        } else if (scroll <= OffsetTop / 2) {

            $('#nav').css('background-color', 'transparent');

        }
    });

    //Movimiento suave de scroll Inicio y Volver Arriba
    $('a.volver-arriba').on('click', function(e) {
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