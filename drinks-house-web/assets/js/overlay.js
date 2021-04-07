//FUNCIONALIDAD DE JS ES REALIZAR UN EFECTO OVERLAY
$(document).ready(function() {

    $('body').on('mouseover', 'article', function() {
        $(".add_shopping", this).addClass('colors');
        $(this).toggleClass('toggle');

    });


    $('body').on('mouseout', 'article', function() {
        $(".add_shopping", this).removeClass('colors');
        $(this).toggleClass('toggle');
    })

})