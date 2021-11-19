import $ from 'jquery';

console.log('register script loaded')

const $password = $('#password');
const $passwordConfirm = $('#password-confirm');

function clientPasswordValidation() {

    var p1 = $password.val();
    var p2 = $passwordConfirm.val()
    if (p1 === p2) {
        $('#register').removeAttr('disabled');
        console.log('password matches')
    } else {
        $('#register').attr('disabled', '1')
        console.log('password does not match');
    };
}


$('input').on('keyup', () => {
    console.log($('#password').val())
    console.log($passwordConfirm.val());
    clientPasswordValidation()
});