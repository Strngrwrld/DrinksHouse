(function () {

    var hamburger = document.querySelector('#hamburger button')
    var nav = document.querySelector('#nav')
    var opciones = document.querySelector('#opciones')

    var efecto = {

        start: function () {
            hamburger.addEventListener('click', function(){
                hamburger.classList.toggle('open');
                nav.classList.toggle('open');
                opciones.classList.toggle('open');
                
            });

            
            opciones.addEventListener('click', function(){
                hamburger.classList.toggle('open');
                nav.classList.toggle('open');
                opciones.classList.toggle('open');
                
            });
        }
    }

    efecto.start();
}())
