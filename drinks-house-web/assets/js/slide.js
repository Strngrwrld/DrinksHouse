/**ESTE ARCHIVO JS TIENE COMO FINALIDAD, DETECTAR LOS MOVIMIENTOS DE LA PAGINA PARA REALIZAR LOS EFECTOS DE SCROLL*/
(function() {

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 2000;
    var CONTADOR = 0;

    const IMAGENES = [
        '../assets/img/banner1.jpg',
        '../assets/img/banner2.jpg',
        '../assets/img/banner3.jpg',
        '../assets/img/banner4.jpg'
    ];


    var metodoSlider = {

        inicio: function() {
            setInterval(metodoSlider.moverSlide, TIEMPO_INTERVALO_MILESIMAS_SEG);
        },

        moverSlide: function() {

            $('#header').css('background-image', `url(${IMAGENES[CONTADOR]})`);

            CONTADOR = CONTADOR + 1;

            if (CONTADOR >= IMAGENES.length) {
                CONTADOR = 0;
            }
        }
    }

    metodoSlider.inicio();


}());