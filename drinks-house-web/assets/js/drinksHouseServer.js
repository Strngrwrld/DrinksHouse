/*LA FINALIDAd DE ESTE ARCHIVO JS ES CONSUMIR SERVICIOS API DE DRINKSHOUSE SERVER*/

//URL DE DRINKSHOUSE SERVER
const url = 'http://165.232.142.71/drinks-house-server/';


//METODO PARA REALIZAR CAPITALIZE
const capitalize = ([first, ...rest], locale = navigator.language) =>
    first.toLocaleUpperCase(locale) + rest.join('')


$('document').ready(function() {
    //SE LLAMA AL API LISTADO DE CATEGORIAS
    callCategories()

    //LLAMA API PAGINADO DE PRODUCTOS
    var request = {
        pageNo: 0,
        pageSize: $('#pageSize').val(),
        sortBy: $('#sortBy').val(),
        filtros: {
            categoria: $('#categories').val(),
            nombre: $('#search').val()
        }
    };

    callProducts(request);
});

//FILTRO DE BUSQUEDA
$('#sortBy').change(function() {

    var request = {
        pageNo: 0,
        pageSize: $('#pageSize').val(),
        sortBy: $('#sortBy').val(),
        filtros: {
            categoria: $('#categories').val(),
            nombre: $('#search').val()
        }
    };

    callProducts(request);
});


$('#categories').change(function() {


    var request = {
        pageNo: 0,
        pageSize: $('#pageSize').val(),
        sortBy: $('#sortBy').val(),
        filtros: {
            categoria: $('#categories').val(),
            nombre: $('#search').val()
        }
    };

    callProducts(request);
});

$('#search_button_movil').click(function() {


    var request = {
        pageNo: 0,
        pageSize: $('#pageSize').val(),
        sortBy: $('#sortBy_movil').val(),
        filtros: {
            categoria: $('#categories_movil').val(),
            nombre: $('#search_movil').val()
        }
    };

    callProducts(request);
});

$('#search').click(function() {


    var request = {
        pageNo: 0,
        pageSize: $('#pageSize').val(),
        sortBy: $('#sortBy').val(),
        filtros: {
            categoria: $('#categories').val(),
            nombre: $('#searchInput').val()
        }
    };

    callProducts(request);
});

$('#searchInput').on('keypress', function(e) {


    if (e.which != 13) {
        return
    }

    var request = {
        pageNo: 0,
        pageSize: $('#pageSize').val(),
        sortBy: $('#sortBy').val(),
        filtros: {
            categoria: $('#categories').val(),
            nombre: $('#searchInput').val()
        }
    };

    callProducts(request);
});

//FUNCIONES DE PAGINADO
$('#anterior').click(function() {

    if ($('#anterior').hasClass('disabled')) {
        console.log("ELEMENTO DESACTIVADO")
        return
    }

    //PREPARANDO REQUEST
    var request = {
        pageNo: $('#pageNo').text() - 2,
        pageSize: $('#pageSize').val(),
        sortBy: $('#sortBy').val(),
        filtros: {
            categoria: $('#categories').val(),
            nombre: $('#search').val()
        }
    };

    callProducts(request);
});

$('#siguiente').click(function() {

    if ($('#siguiente').hasClass('disabled')) {
        console.log("ELEMENTO DESACTIVADO")
        return
    }

    var request = {
        pageNo: $('#pageNo').text(),
        pageSize: $('#pageSize').val(),
        sortBy: $('#sortBy').val(),
        filtros: {
            categoria: $('#categories').val(),
            nombre: $('#search').val()
        }
    };

    callProducts(request);
});

$('#pageSize').change(function() {

    var request = {
        pageNo: 0,
        pageSize: $('#pageSize').val(),
        sortBy: $('#sortBy').val(),
        filtros: {
            categoria: $('#categories').val(),
            nombre: $('#search').val()
        }
    };

    callProducts(request);
});


//FUNCIONES GENERALES
function redirectToDrinks() {

    var seccionOT = $('#drinks').offset().top

    $('html, body').stop().animate({
        scrollTop: seccionOT - 160
    }, 2000)
}

function callCategories() {

    fetch(url.concat('api/category'))
        .then(function(response) {
            //SE VALIDA SI LA RESPUESTA HTTP ES CORRECTA
            if (response.ok) {

                //SE CONVIERTE RESPONSE A FORMADO JSON
                response.json().then(function(jsonResponse) {

                    //SE REALIZA VALIDACION DE CODIGO DE RESPUESTA INTERNO DE API 

                    if (jsonResponse.codError != 200) {
                        console.error("ERROR : " + jsonResponse.desError)
                        return;
                    }
                    //SE DECLARA DATA
                    var data = jsonResponse.data;

                    //SE INSERTA OPCIONES DE CATEGORIA
                    data.forEach(element => {
                        $('#categories').append(`<option value = "${element.id}"> ${capitalize(element.name)} </option>`);
                        $('#categories_movil').append(`<option value = "${element.id}"> ${capitalize(element.name)} </option>`);
                    });
                    console.info('Se cargaron las categorias correctamente');
                });

            } else {
                console.error('Respuesta de red OK pero respuesta HTTP no OK');
            }
        }).catch(function(error) {
            console.error('Hubo un problema con la petición Fetch:' + error.message);
        });
}

function callProducts(request) {

    //SE VUELVE A VACIAR SECTION
    $('#drinks').html('');


    redirectToDrinks();

    //CARGA SPINNER
    agregarSpinner()
    agregarMensaje('<p>Cargando, espere por favor.</p>')

    fetch(url.concat('api/product'), {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        //SE VALIDA SI LA RESPUESTA HTTP ES CORRECTA
        if (response.ok) {

            //SE CONVIERTE RESPONSE A FORMADO JSON
            response.json().then(function(jsonResponse) {

                //SE REALIZA VALIDACION DE CODIGO DE RESPUESTA INTERNO DE API 

                if (jsonResponse.codError != 200) {
                    console.error(jsonResponse.desError)
                    quitarSpinner();
                    agregarMensaje(`<p>${jsonResponse.desError}</p>`);
                    return;
                }

                //VALIDA Y ACTUALIZA PAGINADO
                validaPaginado((jsonResponse.data.pageable.pageNumber + 1), jsonResponse.data.totalPages, jsonResponse.data.numberOfElements)

                //SE DECLARA DATA CONTENIDO DE PRODUCTOS
                var data = jsonResponse.data.content;

                //VARIABLES DE ELEMENTO A INSERTAR
                var descuento = '';
                var imagen = '';


                quitarSpinner();
                quitarMensaje();

                //SE INSERTA PRODUCTOS
                data.forEach(element => {


                    if (element.discount != undefined && element.discount > 0) {
                        descuento = `<p class="descuento"> -${element.discount}%</p>`
                    } else {
                        descuento = ''
                    }


                    if (element.url_image == undefined || element.url_image == '') {
                        imagen = `<img src="assets/img/nofound.jpg" alt="Imagen no disponible">`;
                    } else {
                        imagen = `<img src="${element.url_image}" alt="Imagen no disponible">`;
                    }

                    $('#drinks').append(`
                    <article> 
                    ${imagen}
                    <p class="nombre">${element.name}</p> 
                    <div class="precio"><p>S/. ${element.price}</p> ${descuento}
                    </div>
                    
                    <div class="add_shopping">
                    <span class="icon solid fab fa-shopping-cart"></span>
                    <p>A&ntilde;adir al carrito</p>
                    </div>
                    </article>
                    `);


                });

            });

            console.log("Productos cargados con exito")

        } else {

            //SE MUESTRA MENSAJE DE CONSULTA FALLIDA Y QUITA SPINNER
            quitarSpinner();
            agregarMensaje('<p>Ocurri&oacute; un problema, refresque la p&aacute;gina.</p>');
            console.error('Respuesta de red OK pero respuesta HTTP no OK');
        }
    }).catch(function(error) {

        //SE MUESTRA MENSAJE DE CONSULTA FALLIDA Y QUITA SPINNER
        quitarSpinner();
        agregarMensaje('<p>Ocurri&oacute; un problema, refresque la p&aacute;gina.</p>');
        console.error('Hubo un problema con la petición Fetch:' + error.message);
    });
}

function validaPaginado(pageNumber, totalPages, resultado) {

    //SETEA CANTIDAD DE RESULTADOS
    $('#resultados').text(('Resultados : ').concat(resultado));
    //SETEA PAGINADO
    $('#pageNo').text(pageNumber);
    $('#totalPages').text(totalPages);


    if (pageNumber == 1) {
        $('#anterior').addClass('disabled');
    } else {
        $('#anterior').removeClass('disabled');
    }

    if (pageNumber >= totalPages) {
        $('#siguiente').addClass('disabled');
    } else {
        $('#siguiente').removeClass('disabled');
    }
}

function agregarSpinner() {
    //AGREGAR SPINNER
    $('#spinner').removeClass('invisibility');
    $('#spinner-wrapper').removeClass('invisibility');
}

function quitarSpinner() {
    $('#spinner').addClass('invisibility');
    $('#spinner-wrapper').addClass('invisibility');
}

function agregarMensaje(msg) {

    $('#mensaje').removeClass('invisibility');
    $('#mensaje').html(msg);
}

function quitarMensaje() {
    $('#mensaje').addClass('invisibility');
}