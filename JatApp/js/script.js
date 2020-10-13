const summ = +($('.summ').text().slice(0, -1));

$(".add").click(function() {
    let number = +($('.quantity').text());
    number = $('.quantity').text(++number);
    number = +($('.quantity').text());
    var sum = $('.summ').text(+number*summ + '$');
});

$('.deduct').click(function() {
    let number = +($('.quantity').text());
    if (number < 2) {
        return;
    } else {
        number = $('.quantity').text(--number);
        number = +($('.quantity').text());
        var sum = $('.summ').text(+number*summ + '$');
    }
});

$('.pop_up').click(function() {
    $('.pop_up_registration').css("display", "block");
    $('.modal_wrapper').css("display", "block");
});

$('.pop_up_registration .form-close_icon').click(function() {
    $('.pop_up_registration').css("display", "none");
    $('.modal_wrapper').css("display", "none");
    $('#email').val('');
    $('#name').val('');
    $('.invalid_email').css('display', 'none');
    $('.invalid_name').css('display', 'none');
    $('.invalid_phone').css('display', 'none');
    $('#telephone').css('border', '1px solid #a1a1a1');
    $('#name').css('border', '1px solid #a1a1a1');
    $('#email').css('border', '1px solid #a1a1a1');
});

$('.on_submit input[type="submit"]').click(function() {
    $('.on_submit').css('display', 'none');
    $('.modal_wrapper_submit').css("display", "none");
});

$('.on_submit .form-close_icon').click(function() {
    $('.on_submit').css('display', 'none');
    $('.modal_wrapper_submit').css("display", "none");
});

var emailPattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
$('#email').blur(function() {
    if(($('#email').val() != '') && ($('#email').val().search(emailPattern) == 0)){
            $('#email').css('border', '1px solid #6ed16a');
            $('.invalid_email').css('display', 'none');
            $('#email').addClass('valid');
    } else {
        $('.invalid_email').css('display', 'block');
        $('#email').css('border', '1px solid red');
        $('#email').val('');
        $('#email').removeClass('valid');
    }
});
$('#name').blur(function() {
    if($('#name').val().length >= 3) {
            $('#name').css('border', '1px solid #6ed16a');
            $('.invalid_name').css('display', 'none');
            $('#name').addClass('valid');
    } else {
        $('.invalid_name').css('display', 'block');
        $('#name').css('border', '1px solid red');
        $('#name').val('');
        $('#name').removeClass('valid');
    }
});
$('.pop_up_registration_form input[type="submit"]').click(function() {
    if ($('#email').hasClass('valid')  && $('#name').hasClass('valid')) {
        $('.on_submit').css('display', 'block');
        $('.modal_wrapper_submit').css("display", "block");
        $('.pop_up_registration').css("display", "none");
        $('.modal_wrapper').css("display", "none");
        $('#name').val('');
        $('#email').val('');
        $('#name').css('border', '1px solid #a1a1a1');
        $('#email').css('border', '1px solid #a1a1a1');
    } else {
        $('.empty_form').css('display', 'block');
    }
});
$('.top .close_icon').click(function() {
    $('.top').slideUp(500);
});