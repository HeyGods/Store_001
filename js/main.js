// Popup
$('.trigger-popup').click(function () {
    var $id_popup = $(this).attr('data-popup');
    // console.log($id_popup);
    $('.' + $id_popup).toggleClass('active');
    $('body').addClass('no-scroll');
});
$('.popup .overlay').click(function () {
    $('.popup').removeClass('active');
    $('body').removeClass('no-scroll');
});
// $('.close-popup').click(function () {
//     $(this).parents('.popup').removeClass('active');
//     $('body').removeClass('no-scroll');
// });

// show list ul_show_menu
$('.check_show_menu').click(function (event) {
    $(this).next('.ul_show_menu').toggle();
});

// change transform
$('#menu_page').click(function () {
    if ($("#trans")[0].style.transform != "rotate(90deg)") {
        $("#trans")[0].style.transform = "rotate(90deg)";
    } else
        $("#trans")[0].style.transform = "none";
});

// Tab
$('.menu__tab ul li').click(function () {
    $('.menu__tab ul li').removeClass('active');
    var tab_id = $(this).attr('data-id');
    // console.log(tab_id);
    $(this).addClass('active');
    $('.tab-container').removeClass('active');
    $('.tab-' + tab_id).addClass('active');
});

//password hidden <> display
//sign in
$('#SignIn__password').on('click', function () {
    var passwordField = $('#S_in_psw');
    var passwordFieldType = passwordField.attr('type');

    if (passwordFieldType == 'password') {
        passwordField.attr('type', 'text');

        $(this).val('ẨN');
    } else {
        passwordField.attr('type', 'password');

        $(this).val('HIỆN');
    }
});
// sign up
$('#SignUp__password').on('click', function () {
    var passwordField = $('#S_up_psw');
    var passwordFieldType = passwordField.attr('type');

    if (passwordFieldType == 'password') {
        passwordField.attr('type', 'text');
        $(this).val('ẨN');
    } else {
        passwordField.attr('type', 'password');
        $(this).val('HIỆN');
    }
});