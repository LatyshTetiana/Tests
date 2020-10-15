/* Function for mobile menu button */

$(document).ready(function() {
    $('.mobile-button__wrap').click(function() {
        $(this).toggleClass('open');
    });
});    


/* Function fo accordeon menu */

$(document).ready(function(){
    $('.mobile-item span').click(function(){
        if(!$(this).hasClass('active')) {
            $('.mobile-item span').removeClass('active').next('ul').slideUp(); 
            $(this).addClass('active');
            $(this).next('ul').slideDown(300);
        } else {
            $(this).removeClass('active').next('ul').slideUp();
        }
    });
});