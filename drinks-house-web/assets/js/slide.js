(function() {

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 2000;
    var CONTADOR = 0;

    var slider1 = document.getElementById('slider1');
    var slider2 = document.getElementById('slider2');
    var slider3 = document.getElementById('slider3');

    const IMAGENES = [
        'assets/img/css.png',
        'assets/img/js.png',
        'assets/img/sass.png',
        'assets/img/angular.png',
        'assets/img/react.png',
        'assets/img/flutter.png',
        'assets/img/github.png',
        'assets/img/git.png',
        'assets/img/jenkins.png',
        'assets/img/sqlserver.png',
        'assets/img/mysql.png',
        'assets/img/oracle.png',
        'assets/img/postgre.png',
        'assets/img/node.png',
        'assets/img/python.png',
        'assets/img/java.png',
        'assets/img/spring.png',
        'assets/img/html.png'
    ];


    var metodoSlider = {

        inicio: function() {
            setInterval(metodoSlider.moverSlide, TIEMPO_INTERVALO_MILESIMAS_SEG);
        },

        moverSlide: function() {

            console.log("VALOR CONTADOR : " + CONTADOR);

            slider1.src = IMAGENES[CONTADOR];

            CONTADOR = CONTADOR + 1;

            if (IMAGENES.length <= CONTADOR) {

                console.log("VALIDA: " + CONTADOR);
                CONTADOR = 0;
            }


            slider2.src = IMAGENES[CONTADOR];


            CONTADOR = CONTADOR + 1;

            if (IMAGENES.length <= CONTADOR) {

                console.log("VALIDA: " + CONTADOR);
                CONTADOR = 0;
            }

            slider3.src = IMAGENES[CONTADOR];

        }
    }

    metodoSlider.inicio();


}());