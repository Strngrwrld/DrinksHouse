/**ESTE ARCHIVO JS TIENE COMO FINALIDAD, DETECTAR LOS MOVIMIENTOS DE LA PAGINA PARA REALIZAR LOS EFECTOS DE SCROLL*/
$('document').ready(function() {

    fixing('#nav', '#filter', '#000000', 'transparent')


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

function fixing(bloque, altura, color1, color2) {

    $(window).on('scroll', function() {

        var OffsetTop = $(altura).offset().top;
        var scroll = $(window).scrollTop();

        if (scroll >= OffsetTop / 2) {

            $(bloque).css('background-color', color1);
        } else if (scroll <= OffsetTop / 2) {

            $(bloque).css('background-color', color2);

        }
    });
}