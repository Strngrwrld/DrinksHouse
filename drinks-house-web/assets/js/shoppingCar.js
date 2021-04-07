//FUNCIONALIDAD DE JS ES REALIZAR UN EFECTO OVERLAY
$(document).ready(function() {

    $('#cantidad_comprar').click(function() {

        if ($('#cantidad_comprar').text() == 'Comprar') {

            var seccionOT = $($(this).attr('href')).offset().top

            $('html, body').stop().animate({
                scrollTop: seccionOT - 125
            }, 1000)
        }
    })

})